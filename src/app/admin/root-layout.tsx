import { Metadata } from "next"
import AdminLayout from "./layout"

export const metadata: Metadata = {
  title: "Admin Dashboard - Abi Auto Center",
  description: "Verwaltung der Termine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout>{children}</AdminLayout>
} 