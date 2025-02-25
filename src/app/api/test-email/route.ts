import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mail'

export async function GET() {
  try {
    console.log('Starte E-Mail-Test...')
    
    await sendMail({
      to: 'info@abiautocenter.de',
      subject: 'Test E-Mail',
      html: '<h1>Test E-Mail</h1><p>Dies ist eine Test-E-Mail zur Überprüfung der E-Mail-Konfiguration.</p>'
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Test-E-Mail wurde erfolgreich gesendet' 
    })
  } catch (error) {
    console.error('Fehler beim Test-E-Mail-Versand:', error)
    return NextResponse.json({ 
      error: 'E-Mail-Test fehlgeschlagen', 
      details: error instanceof Error ? error.message : 'Unbekannter Fehler'
    }, { 
      status: 500 
    })
  }
} 