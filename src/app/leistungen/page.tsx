"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Wrench, Droplet, ThermometerSun, Disc, Package,
  CheckCircle, Clock, Coins, Award, CalendarCheck
} from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-[hsl(var(--gold))]">
        <motion.div 
          className="container mx-auto px-4 text-center text-[hsl(var(--dark-blue))]"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeIn}
          >
            Unsere Leistungen – Service, der begeistert!
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl italic mb-8"
            variants={fadeIn}
          >
            &bdquo;Ihr Auto. Unser Service. Perfekt auf Sie abgestimmt.&ldquo;
          </motion.p>
          <motion.p 
            className="max-w-3xl mx-auto text-lg"
            variants={fadeIn}
          >
            Bei <span className="font-semibold">ABI Autocenter</span> dreht sich alles um Sie und Ihr Fahrzeug. 
            Mit modernster Ausstattung, hochwertigen Produkten und einem erfahrenen Team sorgen wir dafür, 
            dass Ihr Fahrzeug stets in Bestform bleibt.
          </motion.p>
        </motion.div>
      </section>

      {/* Hauptleistungen */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--gold))/10] flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[hsl(var(--gold))]" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Ihre Vorteile bei ABI Autocenter
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <benefit.icon className="w-6 h-6 text-[hsl(var(--gold))]" />
                  <h3 className="font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold">Jetzt Termin vereinbaren</h2>
            <p className="text-muted-foreground">
              Planen Sie Ihren Werkstattbesuch in wenigen Schritten. Wählen Sie Ihre gewünschte Leistung, 
              Datum und Uhrzeit – unser Team meldet sich umgehend zur Bestätigung.
            </p>
            <Link
              href="/termin"
              className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] 
                         px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[hsl(var(--gold))/90] 
                         transition-colors dark:hover:bg-gray-200 dark:hover:text-[hsl(var(--dark-blue))]"
            >
              Termin vereinbaren
              <CalendarCheck className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    icon: Wrench,
    title: "Hebebühnenvermietung",
    description: "Schrauben Sie selbst! Mieten Sie eine unserer 10 modernen Hebebühnen und führen Sie Arbeiten wie Ölwechsel, Reifenwechsel oder kleinere Reparaturen eigenständig durch. Wir stellen Ihnen das nötige Equipment zur Verfügung und stehen Ihnen bei Bedarf mit Rat und Tat zur Seite."
  },
  {
    icon: Droplet,
    title: "Ölwechsel-Service",
    description: "Ein regelmäßiger Ölwechsel ist essenziell für die Langlebigkeit Ihres Motors. Unser Team führt den Ölwechsel schnell und fachgerecht durch – auf Wunsch auch mit angeliefertem Öl oder hochwertigen Markenprodukten direkt von uns."
  },
  {
    icon: Disc,
    title: "Reifenwechsel & -lagerung",
    description: "Wechseln Sie Ihre Reifen bei uns – sicher, schnell und professionell. Kein Platz für die Lagerung? Kein Problem! Wir übernehmen das für Sie in unserem klimatisierten Reifenlager."
  },
  {
    icon: ThermometerSun,
    title: "Klimaanlagenservice",
    description: "Eine gut gewartete Klimaanlage sorgt für Komfort und Sicherheit. Wir übernehmen die Wartung, Befüllung und Prüfung Ihrer Klimaanlage – für frische Luft im Sommer und klare Scheiben im Winter."
  },
  {
    icon: Package,
    title: "Ersatzteilverkauf",
    description: "Benötigen Sie neue Bremsen, Filter oder Zubehör? Bei uns finden Sie hochwertige Autoteile von führenden Marken direkt vor Ort – ohne lange Wartezeiten."
  }
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Flexibilität",
    description: "Schrauben Sie selbst oder überlassen Sie uns die Arbeit – ganz nach Ihren Wünschen."
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Dank unserer modernen Ausstattung erledigen wir alle Arbeiten effizient und zuverlässig."
  },
  {
    icon: Coins,
    title: "Kosteneffizienz",
    description: "Sparen Sie durch unsere Hebebühnenvermietung oder profitieren Sie von unseren fairen Preisen."
  },
  {
    icon: Award,
    title: "Qualität vor Ort",
    description: "Hochwertige Produkte und modernste Technik garantieren erstklassige Ergebnisse."
  },
  {
    icon: CalendarCheck,
    title: "Komfort",
    description: "Vereinbaren Sie Ihren Termin bequem online und genießen Sie unseren schnellen Service."
  }
] 