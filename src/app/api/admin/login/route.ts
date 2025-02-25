import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { SignJWT } from 'jose'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@abiautocenter.de'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'IhrSicheresPasswort'
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'IhrGeheimesJWTSecret'
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    if (body.email === ADMIN_EMAIL && body.password === ADMIN_PASSWORD) {
      const token = await new SignJWT({ role: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('24h')
        .sign(JWT_SECRET)
      
      cookies().set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 Stunden
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Ungültige Anmeldedaten' },
      { status: 401 }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 