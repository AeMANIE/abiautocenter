"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  message?: string;
}

const services = [
  "Inspektion",
  "Ölwechsel",
  "Bremsen",
  "Klimaanlage",
  "Reifen & Räder",
  "Hebebühne mieten",
  "Sonstiges"
]

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00"
]

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState<Date>()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<AppointmentFormData | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget as HTMLFormElement
    const data: AppointmentFormData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      date: date!,
      time: (form.elements.namedItem('time') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    }

    // Validiere, dass alle erforderlichen Felder ausgefüllt sind
    if (!data.name || !data.email || !data.phone || !data.service || !data.date || !data.time) {
      toast.error("Fehler", {
        description: "Bitte füllen Sie alle Pflichtfelder aus."
      })
      setLoading(false)
      return
    }

    setFormData(data)
    setShowConfirmation(true)
    setLoading(false)
  }

  async function confirmAppointment() {
    if (!formData) return

    setLoading(true)
    try {
      console.log('Sende Terminanfrage:', formData)
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error('Fehler bei der Terminanfrage:', responseData)
        throw new Error(responseData.error || 'Fehler beim Senden')
      }

      toast.success("Termin angefragt", {
        description: "Wir prüfen Ihre Anfrage und melden uns zeitnah bei Ihnen."
      })
      
      setShowConfirmation(false)
      setFormData(null)
      setDate(undefined)
      const form = document.getElementById('appointmentForm') as HTMLFormElement
      if (form) form.reset()
    } catch (error) {
      console.error('Fehler bei der Terminanfrage:', error)
      toast.error("Fehler", {
        description: error instanceof Error ? error.message : "Ihre Terminanfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form id="appointmentForm" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Telefon *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Ihre Telefonnummer"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1">
              Service *
            </label>
            <Select name="service" required>
              <SelectTrigger>
                <SelectValue placeholder="Service auswählen" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Datum *
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: de }) : <span>Datum auswählen</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  locale={de}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-1">
              Uhrzeit *
            </label>
            <Select name="time" required>
              <SelectTrigger>
                <SelectValue placeholder="Uhrzeit auswählen" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time} Uhr
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Nachricht
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Zusätzliche Informationen zu Ihrem Anliegen"
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] hover:bg-[hsl(var(--gold))/90] 
               dark:hover:bg-gray-200 dark:hover:text-[hsl(var(--dark-blue))]"
          disabled={loading}
        >
          {loading ? "Wird gesendet..." : "Termin anfragen"}
        </Button>
      </form>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terminanfrage bestätigen</DialogTitle>
            <DialogDescription>
              Bitte überprüfen Sie Ihre Angaben:
            </DialogDescription>
          </DialogHeader>
          {formData && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">{formData.name}</p>
                </div>
                <div>
                  <p className="font-medium">E-Mail:</p>
                  <p className="text-muted-foreground">{formData.email}</p>
                </div>
                <div>
                  <p className="font-medium">Telefon:</p>
                  <p className="text-muted-foreground">{formData.phone}</p>
                </div>
                <div>
                  <p className="font-medium">Service:</p>
                  <p className="text-muted-foreground">{formData.service}</p>
                </div>
                <div>
                  <p className="font-medium">Datum:</p>
                  <p className="text-muted-foreground">
                    {format(formData.date, "PPP", { locale: de })}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Uhrzeit:</p>
                  <p className="text-muted-foreground">{formData.time} Uhr</p>
                </div>
              </div>
              {formData.message && (
                <div>
                  <p className="font-medium">Nachricht:</p>
                  <p className="text-muted-foreground">{formData.message}</p>
                </div>
              )}
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setShowConfirmation(false)}
                  disabled={loading}
                >
                  Zurück
                </Button>
                <Button
                  onClick={confirmAppointment}
                  disabled={loading}
                  className="bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] hover:bg-[hsl(var(--gold))/90]"
                >
                  {loading ? "Wird gesendet..." : "Termin bestätigen"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
} 