"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
           <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/batlogo.png"
                alt="Brilliance Aspire Tutoring Logo"
                className="h-20 w-auto object-contain"
              />
              
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
             <Link href="/book-session">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Session</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#services"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Link href="/book-session">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Book Session</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
