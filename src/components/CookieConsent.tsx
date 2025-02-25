"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Cookie, Settings, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface CookieSettings {
  essential: boolean
  statistics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true, // Immer aktiviert
    statistics: false,
    marketing: false
  })

  useEffect(() => {
    setMounted(true)
    // Prüfe Cookie-Consent nach dem Mounting
    const timer = setTimeout(() => {
      try {
        const consent = window.localStorage.getItem('cookie-consent')
        if (!consent) {
          setShowConsent(true)
        }
      } catch (error) {
        console.error('localStorage error:', error)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const acceptAllCookies = () => {
    try {
      const settings = {
        essential: true,
        statistics: true,
        marketing: true
      }
      window.localStorage.setItem('cookie-consent', JSON.stringify(settings))
      setShowConsent(false)
    } catch (error) {
      console.error('Error saving cookie consent:', error)
    }
  }

  const saveCookieSettings = () => {
    try {
      window.localStorage.setItem('cookie-consent', JSON.stringify(settings))
      setShowConsent(false)
    } catch (error) {
      console.error('Error saving cookie settings:', error)
    }
  }

  const declineCookies = () => {
    try {
      const settings = {
        essential: true,
        statistics: false,
        marketing: false
      }
      window.localStorage.setItem('cookie-consent', JSON.stringify(settings))
      setShowConsent(false)
    } catch (error) {
      console.error('Error saving cookie consent:', error)
    }
  }

  // Render nichts bis die Komponente gemounted ist
  if (!mounted) return null
  if (!showConsent) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl my-auto"
        >
          <Card className="border-2 dark:border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Cookie className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(var(--gold))]" />
                Cookie-Einstellungen
              </CardTitle>
            </CardHeader>
            
            {!showDetails ? (
              <>
                <CardContent className="space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Wir verwenden verschiedene Arten von Cookies, um deine Nutzererfahrung auf unserer Website zu optimieren. 
                    Du kannst auswählen, welche Arten von Cookies du zulassen möchtest.
                  </p>
                  <div className="flex items-start gap-4 rounded-lg border p-4 dark:border-border/50">
                    <Shield className="mt-1 h-5 w-5 text-[hsl(var(--gold))]" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Deine Privatsphäre ist uns wichtig</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Erfahre mehr darüber, wie wir Cookies verwenden, in unserer{' '}
                        <Link 
                          href="/datenschutz" 
                          className="text-[hsl(var(--gold))] hover:underline dark:text-[hsl(var(--gold))]"
                        >
                          Cookie-Richtlinie
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 px-4 py-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowDetails(true)}
                    className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-none"
                  >
                    <Settings className="h-4 w-4" />
                    Einstellungen
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      onClick={declineCookies}
                      className="w-full sm:w-auto"
                    >
                      Nur Essenzielle
                    </Button>
                    <Button
                      onClick={acceptAllCookies}
                      className="w-full sm:w-auto bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] hover:bg-[hsl(var(--gold))/90] dark:text-[hsl(var(--dark-blue))]"
                    >
                      Alle akzeptieren
                    </Button>
                  </div>
                </CardFooter>
              </>
            ) : (
              <>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox checked disabled />
                        <span className="font-medium text-sm sm:text-base">
                          Wesentliche (technische) Cookies
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground pl-6">
                        Notwendige Cookies helfen dabei, die Website nutzbar zu machen. 
                        Diese können nicht deaktiviert werden.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          checked={settings.statistics}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({ ...prev, statistics: checked === true }))
                          }
                        />
                        <span className="font-medium text-sm sm:text-base">
                          Statistiken (analytische Cookies)
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground pl-6">
                        Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          checked={settings.marketing}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({ ...prev, marketing: checked === true }))
                          }
                        />
                        <span className="font-medium text-sm sm:text-base">
                          Marketing Cookies
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground pl-6">
                        Marketing-Cookies werden verwendet, um Besuchern relevante Anzeigen und Inhalte anzuzeigen.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 px-4 py-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowDetails(false)}
                    className="w-full sm:w-auto order-1 sm:order-none"
                  >
                    Zurück
                  </Button>
                  <Button
                    onClick={saveCookieSettings}
                    className="w-full sm:w-auto bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] hover:bg-[hsl(var(--gold))/90] dark:text-[hsl(var(--dark-blue))]"
                  >
                    Einstellungen speichern
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 