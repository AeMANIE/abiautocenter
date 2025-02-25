import nodemailer from 'nodemailer'

// E-Mail-Transporter mit Hostinger-Konfiguration
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@abiautocenter.de',
    pass: '87439Kempten+',
  },
  tls: {
    // Deaktiviere SSL-Zertifikatsüberprüfung im Entwicklungsmodus
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  },
  debug: true, // Aktiviere Debug-Logging
})

// Teste die Verbindung beim Start
transporter.verify(function(error, success) {
  if (error) {
    console.error('E-Mail-Server-Verbindungsfehler:', error)
  } else {
    console.log('E-Mail-Server ist bereit für den Versand')
  }
})

interface EmailProps {
  to: string
  subject: string
  html: string
}

export async function sendMail({ to, subject, html }: EmailProps) {
  try {
    console.log('Versuche E-Mail zu senden an:', to)
    const info = await transporter.sendMail({
      from: '"Abi Auto Center" <info@abiautocenter.de>',
      to,
      subject,
      html,
    })
    
    console.log('E-Mail erfolgreich gesendet:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected
    })
    return info
  } catch (error) {
    console.error('Detaillierter E-Mail-Fehler:', {
      error: error,
      errorMessage: error instanceof Error ? error.message : 'Unbekannter Fehler',
      errorStack: error instanceof Error ? error.stack : undefined
    })
    throw error
  }
} 