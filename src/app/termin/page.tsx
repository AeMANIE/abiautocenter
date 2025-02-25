import AppointmentForm from '@/components/AppointmentForm'
import { Card } from '@/components/ui/card'
import { 
  CheckCircle2, 
  Clock, 
  Wrench, 
  PiggyBank 
} from 'lucide-react'

export default function TerminPage() {
  const benefits = [
    {
      icon: <PiggyBank className="h-6 w-6 text-[hsl(var(--gold))]" />,
      title: "Günstige Preise",
      description: "Unsere Leistungen sind transparent und erschwinglich, ohne Kompromisse bei der Qualität."
    },
    {
      icon: <Wrench className="h-6 w-6 text-[hsl(var(--gold))]" />,
      title: "Markenprodukte",
      description: "Wir verwenden ausschließlich hochwertige Ersatzteile und Materialien namhafter Hersteller."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-[hsl(var(--gold))]" />,
      title: "Flexibilität",
      description: "Wählen Sie zwischen Selbstschrauben oder professionellem Service – so, wie es für Sie am besten passt."
    },
    {
      icon: <Clock className="h-6 w-6 text-[hsl(var(--gold))]" />,
      title: "Komfortable Online-Buchung",
      description: "Sparen Sie Zeit und vereinbaren Sie Ihren Termin in wenigen Klicks."
    }
  ]

  return (
    <div className="section-container-with-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Termin vereinbaren</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Planen Sie Ihren Werkstattbesuch bei uns ganz bequem online! 
            Ob Sie selbst Hand anlegen möchten oder unsere professionellen Services 
            in Anspruch nehmen – bei uns erhalten Sie höchste Qualität zu fairen Preisen.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Warum ABI Autocenter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border-2 hover:border-[hsl(var(--gold))] transition-colors">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg border-2 p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Jetzt Termin sichern und sparen!
            </h2>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  )
} 