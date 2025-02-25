"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Fehler beim Senden')

      toast.success("Nachricht gesendet", {
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen."
      })
      
      e.currentTarget.reset()
    } catch {
      toast.error("Fehler", {
        description: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Kontaktformular</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Ihr vollständiger Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-Mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ihre.email@beispiel.de"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Telefon
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ihre Telefonnummer"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Nachricht *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Ihre Nachricht an uns"
            rows={5}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] hover:bg-[hsl(var(--gold))/90] 
                     dark:hover:bg-gray-200 dark:hover:text-[hsl(var(--dark-blue))]"
          disabled={loading}
        >
          {loading ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </div>
    </form>
  )
} 