import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Abi Auto Center - Ihre Werkstatt in Kempten",
    template: "%s | Abi Auto Center"
  },
  description: "Professionelle Autowerkstatt in Kempten mit 10 Hebebühnen. Reparatur, Wartung, Inspektion und mehr.",
  keywords: ["Autowerkstatt", "Kempten", "KFZ-Service", "Reparatur", "Wartung", "Inspektion"],
  authors: [{ name: "Abi Auto Center" }],
  creator: "Abi Auto Center",
  publisher: "Abi Auto Center",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://abiautocenter.de",
    siteName: "Abi Auto Center",
    images: [{
      url: "/bilder/abilogogold.png",
      width: 1200,
      height: 630,
      alt: "Abi Auto Center"
    }]
  },
  icons: {
    icon: [
      {
        url: '/bilder/favicon.png',
        sizes: '40x17',
        type: 'image/png',
      },
      {
        url: '/bilder/favicon.png',
        sizes: '20x9',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/bilder/favicon.png',
        sizes: '180x77',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <Toaster richColors closeButton position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
