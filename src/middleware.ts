import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

// Konvertiere den JWT_SECRET in einen UInt8Array für jose
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'IhrGeheimesJWTSecret'
)

export async function middleware(request: NextRequest) {
  // Prüfen ob es sich um eine Admin-Route handelt
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Login-Seite ausnehmen
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }

    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    try {
      await jwtVerify(token, JWT_SECRET)
      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

// Konfiguriere die Middleware für spezifische Pfade
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - bilder (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|bilder).*)',
    '/admin/:path*'
  ],
} 