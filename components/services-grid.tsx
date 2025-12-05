import Link from "next/link"
import { ArrowRight, Construction, Droplets, Building2, Factory, ClipboardCheck, Wrench } from "lucide-react"
import { SERVICES } from "@/lib/constants"

const serviceIcons = {
  roads: Construction,
  drainage: Droplets,
  buildings: Building2,
  industrial: Factory,
  "project-management": ClipboardCheck,
  facility: Wrench,
}

export function ServicesGrid() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-xl md:text-2xl">Our Services</h2>
          <p className="text-md max-w-2xl mx-auto text-muted leading-relaxed">
            Our work covers the full range of civil and building construction, from roads and drainage to structural projects and facility support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
            return (
              <Link
                key={service.id}
                href={`/services#${service.slug}`}
                className="group bg-white border border-border rounded-lg p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="bg-surface rounded-lg w-10 h-10 flex items-center justify-center mb-4 group-hover:bg-mid-green group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5 text-charcoal group-hover:text-white" />
                </div>
                <h3 className="text-lg mb-2 group-hover:text-charcoal transition-colors">{service.title}</h3>
                <p className="text-muted mb-4 leading-relaxed text-md">{service.description}</p>
                <div className="flex items-center text-mid-green font-medium text-md group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
