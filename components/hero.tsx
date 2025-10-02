"use client"

import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"

export function Hero() {
  return (
    <section className="relative py-20 flex items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infrastructure-B5oqZ48HPsweqV6uCrZDAmURIoPFni.jpg"
          alt="Road construction project with asphalt paving in Nigeria"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[rgba(14,58,47,0.18)]" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-white mb-6 text-balance text-2xl md:text-3xl font-bold">
            Construction that delivers on time and to spec.
          </h1>
          <p className="text-white text-sm mb-8 leading-relaxed">
            Roads, drainage, buildings, and facility support across Nigeria.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href={addUTMParams(getWhatsAppUrl("site-visit"), "hero-primary", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-deep-green hover:bg-primary-hover text-white font-bold px-6 py-3 md:px-5 md:py-2.5 text-sm rounded transition-all duration-300"
            >
              Book a site visit
            </a>
            <a
              href={addUTMParams(getWhatsAppUrl("quote"), "hero-secondary", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-mid-green text-white hover:bg-mid-green hover:text-white font-bold px-6 py-3 md:px-5 md:py-2.5 text-sm rounded transition-all duration-300"
            >
              Get a 48-hour quote
            </a>
            <a
              href={addUTMParams(getWhatsAppUrl("general"), "hero-whatsapp", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 md:w-9 md:h-9 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#25D366] text-white transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-3.5 h-3.5 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>

          <p className="text-white text-sm tracking-wide">
            Government and private projects across Delta, Lagos, Abuja.
          </p>
        </div>
      </div>
    </section>
  )
}
