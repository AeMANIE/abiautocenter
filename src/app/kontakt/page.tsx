import ContactForm from '@/components/ContactForm'
import Map from '@/components/Map'
import { Phone, Mail } from 'lucide-react'

export default function KontaktPage() {
  return (
    <div className="section-container-with-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Kontaktieren Sie uns</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Nachricht! Haben Sie Fragen, möchten Sie einen Termin 
            vereinbaren oder benötigen Sie weitere Informationen zu unseren Leistungen? 
            Wir sind gerne für Sie da! Nutzen Sie die untenstehenden Kontaktmöglichkeiten, 
            um uns zu erreichen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="bg-card rounded-lg border p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Unsere Adresse</h2>
              <address className="not-italic text-muted-foreground">
                ABI Autocenter<br />
                Oberwanger Str. 16<br />
                D-87439 Kempten (Allgäu)<br />
                Deutschland
              </address>

              <div className="mt-6 space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[hsl(var(--gold))]" />
                  <a href="tel:+498311234567" className="hover:text-[hsl(var(--gold))]">
                    +49 (0) 831 / 1234567
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[hsl(var(--gold))]" />
                  <a href="mailto:info@abiautocenter.de" className="hover:text-[hsl(var(--gold))]">
                    info@abiautocenter.de
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Mo - Fr: 08:00 - 18:00</p>
                  <p>Sa: 09:00 - 13:00</p>
                  <p>So: Geschlossen</p>
                </div>
              </div>
            </div>

            <Map />
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  )
} 