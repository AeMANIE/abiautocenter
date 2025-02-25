"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function AppointmentPreview() {
  return (
    <section className="section-container-with-bg py-16 bg-card">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Termin vereinbaren
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vereinbaren Sie schnell und einfach einen Termin für Ihr Fahrzeug. 
            Wir haben 10 Hebebühnen und flexible Zeitfenster für Sie.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <motion.div 
              className="flex items-center gap-3 text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-6 w-6 text-[hsl(var(--gold))]" />
              <span>Flexible Terminwahl</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="h-6 w-6 text-[hsl(var(--gold))]" />
              <span>Schnelle Bearbeitung</span>
            </motion.div>
          </div>

          <motion.div 
            className="mt-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/termin" 
              className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] 
                         px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[hsl(var(--gold))/90] 
                         transition-colors dark:hover:bg-gray-200 dark:hover:text-[hsl(var(--dark-blue))]"
            >
              Zum Terminformular
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-md"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] font-bold">
                  {index + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

const steps = [
  {
    title: "Service wählen",
    description: "Wählen Sie aus unseren verschiedenen Leistungen wie Hebebühnenmiete, Reifenwechsel oder Ölwechsel."
  },
  {
    title: "Termin auswählen",
    description: "Wählen Sie Ihren Wunschtermin aus den verfügbaren Zeitfenstern."
  },
  {
    title: "Bestätigung erhalten",
    description: "Sie erhalten umgehend eine Bestätigung Ihres Termins per E-Mail."
  }
] 