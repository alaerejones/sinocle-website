import { Phone, Mail, MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"

export function ContactBand() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-base max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <a
            href={addUTMParams(getWhatsAppUrl("call"), "contact-band-phone", "website")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-lg p-6 text-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold mb-2">Call Us</h3>
            <p className="text-muted text-base">{CONTACT.phone}</p>
          </a>

          {/* Email */}
          <a
            href={addUTMParams(getWhatsAppUrl("email"), "contact-band-email", "website")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-lg p-6 text-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold mb-2">Email Us</h3>
            <p className="text-muted text-base">{CONTACT.email}</p>
          </a>

          {/* WhatsApp */}
          <a
            href={addUTMParams(CONTACT.whatsapp.url, "contact-band-whatsapp", "website")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-lg p-6 text-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold mb-2">WhatsApp</h3>
            <p className="text-muted text-base">Chat with us</p>
          </a>
        </div>
      </div>
    </section>
  )
}
