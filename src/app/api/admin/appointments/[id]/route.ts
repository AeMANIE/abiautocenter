import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { verifyAuth } from '@/lib/auth'

interface RouteParams {
  params: {
    id: string
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1]
    if (!token) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    const verified = await verifyAuth()
    if (!verified) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    const { id } = params
    const data = await request.json()

    const result = await db.query(
      'UPDATE appointments SET status = $1, admin_notes = $2 WHERE id = $3 RETURNING *',
      [data.status, data.admin_notes, id]
    )

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Termin nicht gefunden' },
        { status: 404 }
      )
    }

    return NextResponse.json(result.rows[0])
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Termins:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 