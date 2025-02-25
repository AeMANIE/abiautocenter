import Link from 'next/link'
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Abi Auto Center</p>
              <p>Oberwanger Str. 16</p>
              <p>87439 Kempten</p>
              <p>Tel: 0831 12345678</p>
              <p>Email: info@abiautocenter.de</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Mo - Fr: 08:00 - 18:00</p>
              <p>Sa: 09:00 - 13:00</p>
              <p>So: Geschlossen</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link href="/impressum" className="block text-muted-foreground hover:text-primary">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-muted-foreground hover:text-primary">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abi Auto Center. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
} 