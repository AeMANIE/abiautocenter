"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  "10 moderne Hebebühnen",
  "Faire Preise",
  "Flexible Termine",
  "Professionelles Team"
]

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      {/* Hintergrundbild mit Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bilder/8.png"
          alt="Abi Auto Center Werkstatt"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ihre Werkstatt in Kempten
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Selbst schrauben oder schrauben lassen – bei uns haben Sie die Wahl!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 text-white/90"
              >
                <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))]" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/termin"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--gold))] 
                         text-[hsl(var(--dark-blue))] px-8 py-4 rounded-lg font-semibold 
                         hover:bg-[hsl(var(--gold))/90] transition-colors group"
            >
              Termin buchen
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg 
                         font-semibold text-white border-2 border-white/20 
                         hover:bg-white/10 transition-colors"
            >
              Unsere Leistungen
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 