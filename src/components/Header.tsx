"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from 'next/image'

const navigation = [
  { name: "Home", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Termin", href: "/termin" },
  { name: "Kontakt", href: "/kontakt" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - responsiv */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/bilder/abilogogold.png" 
            alt="Logo" 
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop/Tablet Navigation - rechts ausgerichtet */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[hsl(var(--gold))] ${
                  pathname === item.href ? "text-[hsl(var(--gold))]" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button 
            asChild 
            className="bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] hover:bg-[hsl(var(--gold))/90] 
                       dark:hover:bg-gray-200 dark:hover:text-[hsl(var(--dark-blue))]"
          >
            <Link href="/termin">
              Termin vereinbaren
            </Link>
          </Button>
          {/* Theme Toggle für Desktop */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-[hsl(var(--gold))]"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Theme wechseln</span>
          </Button>
        </div>

        {/* Mobile Navigation - links ausgerichtet */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle für Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-[hsl(var(--gold))]"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Theme wechseln</span>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={handleLinkClick}
              >
                <Image 
                  src="/bilder/abilogogold.png"
                  alt="Logo"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
              <nav className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`text-lg transition-colors hover:text-[hsl(var(--gold))] ${
                      pathname === item.href ? "text-[hsl(var(--gold))]" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  asChild 
                  className="mt-4 bg-[hsl(var(--gold))] text-[hsl(var(--dark-blue))] hover:bg-[hsl(var(--gold))/90] 
                             dark:hover:bg-gray-200 dark:hover:text-[hsl(var(--dark-blue))]"
                >
                  <Link href="/termin" onClick={handleLinkClick}>
                    Termin vereinbaren
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 