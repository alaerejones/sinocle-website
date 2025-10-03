"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"
import { trackContactClick } from "@/lib/analytics"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePhoneClick = () => {
    trackContactClick("phone", "header-phone")
    const whatsappUrl = addUTMParams(getWhatsAppUrl("call"), "header-phone", "website")
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailClick = () => {
    trackContactClick("email", "header-email")
    const whatsappUrl = addUTMParams(getWhatsAppUrl("email"), "header-email", "website")
    window.open(whatsappUrl, "_blank")
  }

  const handleWhatsAppClick = () => {
    trackContactClick("whatsapp", "header-whatsapp")
    const whatsappUrl = addUTMParams(CONTACT.whatsapp.url, "header-whatsapp", "website")
    window.open(whatsappUrl, "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar with contact options */}
      <div className="bg-deep-green text-white">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-md">
            <button
              onClick={handlePhoneClick}
              className="flex items-center gap-2 hover:text-mint transition-colors group relative"
              aria-label="Call us on WhatsApp"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call us</span>
              <span className="absolute -bottom-8 left-0 bg-ink text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                Fastest reply on WhatsApp
              </span>
            </button>

            <button
              onClick={handleEmailClick}
              className="flex items-center gap-2 hover:text-mint transition-colors"
              aria-label="Email us via WhatsApp"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email us</span>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 hover:text-mint transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Sinocle Nigeria Limited"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-text-gray hover:text-deep-green transition-colors font-medium ${
                    isActive ? "text-mid-green border-b-2 border-mid-green" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-gray hover:text-deep-green transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-line-gray animate-fade-in" aria-label="Mobile navigation">
          <div className="container py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-text-gray hover:text-deep-green transition-colors font-medium ${
                    isActive ? "text-mid-green" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <a
              href={addUTMParams(getWhatsAppUrl("site-visit"), "mobile-menu-cta", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-deep-green text-white text-center font-bold px-6 py-3 rounded transition-colors hover:bg-primary-hover"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Site Visit
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
