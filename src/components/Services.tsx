"use client"

import { motion } from 'framer-motion'
import { Wrench, Car, Droplet, Cog, ThermometerSun, Disc } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Wrench,
    title: 'Hebebühnenvermietung',
    description: 'Perfekt für Selbstschrauber – arbeiten Sie eigenständig an Ihrem Fahrzeug mit professioneller Ausstattung.'
  },
  {
    icon: Droplet,
    title: 'Ölwechsel-Service',
    description: 'Schnell, fachgerecht und auf Wunsch mit angeliefertem Öl – wir kümmern uns um Ihr Fahrzeug.'
  },
  {
    icon: Disc,
    title: 'Reifenwechsel & -lagerung',
    description: 'Wechseln oder lagern Sie Ihre Reifen sicher und bequem bei uns.'
  },
  {
    icon: ThermometerSun,
    title: 'Klimaanlagenservice',
    description: 'Wartung und Befüllung für ein angenehmes Fahrerlebnis – immer mit modernster Technik.'
  },
  {
    icon: Car,
    title: 'Inspektion',
    description: 'Regelmäßige Wartung und Inspektion nach Herstellervorgaben für maximale Sicherheit.'
  },
  {
    icon: Cog,
    title: 'Diagnose',
    description: 'Moderne Fahrzeugdiagnose mit neuester Technik für präzise Fehlererkennung.'
  }
]

export default function Services() {
  return (
    <section className="section-container-with-bg py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Unsere Leistungen</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Von der Selbstschrauber-Lösung bis zum Rundum-Service – wir bieten Ihnen 
          professionelle Autowerkstatt-Leistungen zu fairen Preisen.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="transition-all hover:shadow-lg hover:scale-105">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto p-3 rounded-full bg-background border-2 border-[hsl(var(--gold))]">
                  <service.icon className="w-8 h-8 text-[hsl(var(--gold))]" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 