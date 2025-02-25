import { z } from "zod"

export const appointmentSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().regex(/^[0-9\s\-\+]{6,20}$/, "Ungültige Telefonnummer"),
  service: z.string().min(1, "Bitte wählen Sie einen Service"),
  date: z.date().min(new Date(), "Datum muss in der Zukunft liegen"),
  time: z.string().min(1, "Bitte wählen Sie eine Uhrzeit")
}) 