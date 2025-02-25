import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'IhrGeheimesJWTSecret'
)

export async function verifyAuth(/* req: Request */) {
  const token = cookies().get('admin_token')?.value

  if (!token) {
    return false
  }

  try {
    await jwtVerify(token, JWT_SECRET)
    return true
  } catch {
    return false
  }
} 