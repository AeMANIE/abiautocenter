export interface Appointment {
  id: string
  customerName: string
  email: string
  phone: string
  service: string
  date: Date
  time: string
  status: 'pending' | 'confirmed' | 'rejected'
  createdAt: Date
  updatedAt: Date
}

export interface Service {
  id: string
  name: string
  description: string
  duration: number
  price: number
} 