import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-green text-white relative overflow-hidden">
      {/* Watermark logo */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <Image src="/images/logo.png" alt="" width={300} height={300} className="w-64 h-64 object-contain" />
      </div>

      <div className="container relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Sinocle Nigeria Limited"
              width={120}
              height={120}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white text-sm leading-relaxed">
              Construction that delivers on time and to spec across Nigeria.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white hover:text-mint transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-mint transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-mint transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-mint transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-3 w-3 mt-1 flex-shrink-0 text-mid-green" />
                <span className="text-white">
                  {CONTACT.address.street}, {CONTACT.address.city}, {CONTACT.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-3 w-3 flex-shrink-0 text-mid-green" />
                <a href={`tel:${CONTACT.phone}`} className="text-white hover:text-mint transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-3 w-3 flex-shrink-0 text-mid-green" />
                <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-mint transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MessageCircle className="h-3 w-3 flex-shrink-0 text-[#25D366]" />
                <a
                  href={addUTMParams(CONTACT.whatsapp.url, "footer", "website")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-mint transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold text-white mb-4">Get Started</h3>
            <p className="text-white text-sm mb-4">Ready to start your project? Request a site visit today.</p>
            <a
              href={addUTMParams(getWhatsAppUrl("site-visit"), "footer-cta", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-deep-green hover:bg-primary-hover text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm border-2 border-white"
            >
              Request a Site Visit
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white text-sm text-center">
            &copy; {currentYear} Sinocle Nigeria Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
