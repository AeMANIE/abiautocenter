"use client"

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AppointmentPreview from '@/components/AppointmentPreview'
import Link from 'next/link'

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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      {/* Intro Section */}
      <section className="section-container-with-bg py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[hsl(var(--gold))]"
            variants={fadeIn}
          >
            ABI Autocenter – Ihre Werkstatt, Ihre Freiheit!
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl italic text-muted-foreground"
            variants={fadeIn}
          >
            &bdquo;Selbst schrauben oder schrauben lassen – bei uns haben Sie die Wahl!&ldquo;
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground"
            variants={fadeIn}
          >
            Willkommen bei <span className="font-semibold">ABI Autocenter</span>, 
            Ihrer modernen Autowerkstatt in <span className="font-semibold">Kempten (Allgäu)</span>! 
            Ob Sie selbst Hand anlegen möchten oder auf unsere professionellen Services setzen – 
            bei uns finden Sie die perfekte Lösung für Ihr Fahrzeug.
          </motion.p>
        </motion.div>
      </section>

      {/* Vorteile Section */}
      <section className="section-container-with-bg bg-card py-16">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            Warum ABI Autocenter?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--gold))]">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Services />

      {/* CTA Section */}
      <section className="section-container-with-bg py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold"
            variants={fadeIn}
          >
            Ihr Auto verdient den besten Service
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            variants={fadeIn}
          >
            Bei ABI Autocenter UG kombinieren wir moderne Technik mit einem kundenorientierten Ansatz. 
            Egal, ob Hobby-Schrauber oder Autofahrer ohne technisches Know-how – wir bieten Ihnen 
            eine Werkstattlösung, die genau zu Ihren Bedürfnissen passt.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link 
              href="/termin" 
              className="inline-block bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] 
                         px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[hsl(var(--gold))/90] 
                         transition-colors dark:hover:bg-gray-200 dark:hover:text-[hsl(var(--dark-blue))]"
            >
              Jetzt Termin vereinbaren
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <AppointmentPreview />
    </main>
  )
}

const advantages = [
  {
    title: "Selbst schrauben leicht gemacht",
    description: "Nutzen Sie eine unserer 10 modernen Hebebühnen und erledigen Sie Arbeiten wie Ölwechsel oder Reifenwechsel eigenständig – einfach, sicher und kostengünstig."
  },
  {
    title: "Professionelle Fahrzeugwartung",
    description: "Unser erfahrenes Team übernimmt Reparaturen und Wartungen schnell, zuverlässig und zu fairen Preisen."
  },
  {
    title: "Hochwertige Ersatzteile vor Ort",
    description: "Kaufen Sie Top-Markenprodukte wie Motoröl, Reifen und Zubehör direkt bei uns – ohne lange Wartezeiten."
  },
  {
    title: "Bequeme Online-Terminbuchung",
    description: "Planen Sie Ihren Werkstattbesuch in wenigen Klicks – flexibel, unkompliziert und ganz nach Ihrem Zeitplan."
  }
]
