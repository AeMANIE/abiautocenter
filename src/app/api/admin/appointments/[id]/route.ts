import type { NextRequest } from 'next/server'
import pool from '@/lib/db'
import { sendMail } from '@/lib/mail'
import { verifyAuth } from '@/lib/auth'

// Korrekte Typdefinition für Next.js Route Handler
export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
): Promise<Response> {
  try {
    const isAuthorized = await verifyAuth()
    if (!isAuthorized) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { status } = await request.json()
    
    // Termin aktualisieren
    const result = await pool.query(
      `UPDATE appointments 
       SET status = $1, updated_at = NOW() 
       WHERE id = $2 
       RETURNING *`,
      [status, context.params.id]
    )

    const appointment = result.rows[0]

    // E-Mail an den Kunden senden
    const emailSubject = status === 'confirmed' 
      ? 'Ihr Termin wurde bestätigt'
      : 'Ihr Termin wurde leider abgelehnt'

    const emailHtml = status === 'confirmed'
      ? `
        <h2>Ihr Termin wurde bestätigt</h2>
        <p>Sehr geehrte(r) ${appointment.customer_name},</p>
        <p>Ihr Termin am ${new Date(appointment.appointment_date).toLocaleDateString('de-DE')} 
           um ${appointment.appointment_time} Uhr wurde bestätigt.</p>
        <p>Service: ${appointment.service}</p>
        <p>Wir freuen uns auf Ihren Besuch!</p>
      `
      : `
        <h2>Ihr Termin wurde leider abgelehnt</h2>
        <p>Sehr geehrte(r) ${appointment.customer_name},</p>
        <p>Leider müssen wir Ihnen mitteilen, dass Ihr Termin am 
           ${new Date(appointment.appointment_date).toLocaleDateString('de-DE')} 
           um ${appointment.appointment_time} Uhr nicht möglich ist.</p>
        <p>Bitte buchen Sie einen alternativen Termin.</p>
      `

    await sendMail({
      to: appointment.email,
      subject: emailSubject,
      html: emailHtml
    })

    return Response.json(appointment)
  } catch (err) {
    console.error(err)
    return Response.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 