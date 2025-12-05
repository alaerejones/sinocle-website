"use client"

import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"

export function Hero() {
  return (
    <section className="relative py-25 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/infrastructure.jpg"
          alt="Road construction project with asphalt paving in Nigeria"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[rgba(14,58,47,0.18)]" />
      </div>

      <div className="container relative z-10 py-33">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="!text-white mb-6 text-balance text-2xl md:text-3xl font-bold">
            Construction that delivers on time and to spec.
          </h1>
          <p className="text-white text-md mb-8 leading-relaxed">
            We handle private, commercial, estate and government projects across Nigeria and West Africa. We deliver to spec, on time, and with safe site standards.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href={addUTMParams(getWhatsAppUrl("site-visit"), "hero-primary", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-deep-green hover:bg-primary-hover text-white font-bold px-6 py-3 md:px-5 md:py-2.5 text-md rounded transition-all duration-300"
            >
              Book a site visit
            </a>
            <a
              href={addUTMParams(getWhatsAppUrl("quote"), "hero-secondary", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-mid-green text-white hover:bg-mid-green hover:text-white font-bold px-6 py-3 md:px-5 md:py-2.5 text-md rounded transition-all duration-300"
            >
              Get a quote
            </a>
          
          </div>

      
        </div>
      </div>
    </section>
  )
}
