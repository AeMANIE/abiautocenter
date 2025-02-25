import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { sendMail } from '@/lib/mail'
import { appointmentSchema } from '@/lib/validations'

interface PostgresError extends Error {
  code?: string;
  detail?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Empfangene Terminanfrage:', body)

    // Validiere die eingehenden Daten
    try {
      appointmentSchema.parse({
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        date: new Date(body.date),
        time: body.time
      })
    } catch (validationError) {
      console.error('Validierungsfehler:', validationError)
      return NextResponse.json(
        { error: 'Ungültige Eingabedaten', details: validationError },
        { status: 400 }
      )
    }
    
    // Formatiere das Datum für PostgreSQL
    const formattedDate = new Date(body.date).toISOString().split('T')[0]
    
    console.log('Versuche Datenbankverbindung...')
    // Speichern in der Datenbank
    let result;
    try {
      result = await pool.query(
        `INSERT INTO appointments 
         (customer_name, email, phone, service, appointment_date, appointment_time, status) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) 
         RETURNING id`,
        [
          body.name,
          body.email,
          body.phone,
          body.service,
          formattedDate,
          body.time,
          'pending'
        ]
      )
      console.log('Termin in Datenbank gespeichert:', result.rows[0])
    } catch (dbError) {
      console.error('Datenbankfehler:', dbError)
      return NextResponse.json(
        { 
          error: 'Datenbankfehler', 
          details: dbError instanceof Error ? {
            message: dbError.message,
            code: (dbError as PostgresError).code,
            detail: (dbError as PostgresError).detail
          } : 'Unbekannter Datenbankfehler' 
        },
        { status: 500 }
      )
    }

    console.log('Versuche E-Mails zu senden...')
    // E-Mail an den Geschäftsführer
    try {
      await sendMail({
        to: process.env.ADMIN_EMAIL || 'info@abiautocenter.de',
        subject: 'Neue Terminanfrage',
        html: `
          <h2>Neue Terminanfrage</h2>
          <p><strong>Kunde:</strong> ${body.name}</p>
          <p><strong>E-Mail:</strong> ${body.email}</p>
          <p><strong>Telefon:</strong> ${body.phone}</p>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Datum:</strong> ${new Date(body.date).toLocaleDateString('de-DE')}</p>
          <p><strong>Uhrzeit:</strong> ${body.time} Uhr</p>
          <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/admin/termine/${result.rows[0].id}">Termin verwalten</a>
        `
      })
      console.log('Admin-E-Mail gesendet')

      // Bestätigungs-E-Mail an den Kunden
      await sendMail({
        to: body.email,
        subject: 'Ihre Terminanfrage bei Abi Auto Center',
        html: `
          <h2>Vielen Dank für Ihre Terminanfrage</h2>
          <p>Sehr geehrte(r) ${body.name},</p>
          <p>wir haben Ihre Terminanfrage erhalten und werden diese schnellstmöglich bearbeiten.</p>
          <p><strong>Ihre Angaben:</strong></p>
          <p>Service: ${body.service}</p>
          <p>Datum: ${new Date(body.date).toLocaleDateString('de-DE')}</p>
          <p>Uhrzeit: ${body.time} Uhr</p>
          <p>Sie erhalten eine weitere E-Mail, sobald Ihr Termin bestätigt wurde.</p>
          <p>Mit freundlichen Grüßen<br>Ihr Abi Auto Center Team</p>
        `
      })
      console.log('Kunden-E-Mail gesendet')
    } catch (emailError) {
      console.error('Fehler beim E-Mail-Versand:', emailError)
      // Wir geben den spezifischen E-Mail-Fehler zurück
      return NextResponse.json(
        { error: 'E-Mail-Versand fehlgeschlagen', details: emailError instanceof Error ? emailError.message : 'Unbekannter E-Mail-Fehler' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true,
      message: 'Termin wurde erfolgreich angefragt'
    })

  } catch (error) {
    console.error('Allgemeiner Fehler:', error)
    return NextResponse.json(
      { 
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unbekannter Fehler'
      },
      { status: 500 }
    )
  }
} 