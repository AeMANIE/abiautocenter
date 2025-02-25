import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // E-Mail an den Betreiber senden
    await sendMail({
      to: 'info@abiautocenter.de',
      subject: 'Neue Kontaktanfrage',
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>E-Mail:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone || 'Nicht angegeben'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${body.message}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending contact form:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 