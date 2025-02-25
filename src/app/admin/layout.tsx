"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Navigation */}
      <nav className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/admin/termine" className="font-bold">
            Admin Dashboard
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleLogout}
            >
              Abmelden
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Hauptinhalt */}
      <main className="container mx-auto px-4 py-4">
        {children}
      </main>
    </div>
  )
} 