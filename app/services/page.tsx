import type { Metadata } from "next"
import { Check, Clock, FileCheck, ArrowRight } from "lucide-react"
import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Construction Services - Roads, Drainage, Buildings | Sinocle Nigeria",
  description:
    "Professional construction services in Nigeria: road construction, drainage systems, building construction, industrial works, project management, and facility services.",
  keywords: [
    "road construction contractor Nigeria",
    "drainage contractor",
    "building contractor Nigeria",
    "industrial construction",
    "project management Nigeria",
    "facility services",
  ],
}

interface ServiceDetail {
  id: string
  title: string
  slug: string
  headline: string
  valueLine: string
  image: string
  whatWeDo: string[]
  whatYouGet: string[]
  timeline: string
  handover: string[]
}

const services: ServiceDetail[] = [
  {
    id: "road-construction",
    title: "Road Construction",
    slug: "road-construction",
    headline: "Durable Road Infrastructure Built to Last",
    valueLine: "Quality roads that connect communities and support economic growth across Nigeria.",
    image: "/images/infrastructure-B5oqZ48HPsweqV6uCrZDAmURIoPFni.jpg",
    whatWeDo: [
      "Site survey and soil analysis",
      "Road design and engineering",
      "Earthworks and grading",
      "Base and sub-base construction",
      "Asphalt laying and compaction",
      "Road marking and signage",
    ],
    whatYouGet: [
      "Roads built to Nigerian standards",
      "Reduced maintenance costs",
      "Improved community access",
      "On-time project delivery",
      "Full documentation and warranties",
    ],
    timeline: "3-12 months depending on scope",
    handover: ["As-built drawings", "Material test certificates", "Maintenance guidelines", "12-month warranty"],
  },
  {
    id: "drainage-systems",
    title: "Drainage Systems",
    slug: "drainage-systems",
    headline: "Comprehensive Drainage Solutions",
    valueLine: "Prevent flooding and protect infrastructure with expertly designed drainage systems.",
    image: "/images/1-NLHAjuQI0c9iOTX13ZriSrz73rE3q4.png",
    whatWeDo: [
      "Drainage assessment and design",
      "Excavation and trenching",
      "Pipe installation and jointing",
      "Culvert construction",
      "Surface water management",
      "Erosion control measures",
    ],
    whatYouGet: [
      "85%+ reduction in flooding",
      "Protected infrastructure",
      "Improved public health",
      "Sustainable water management",
      "Long-term cost savings",
    ],
    timeline: "2-8 months depending on scope",
    handover: ["Drainage plans", "Flow calculations", "Inspection reports", "Maintenance schedule"],
  },
  {
    id: "building-construction",
    title: "Building Construction",
    slug: "building-construction",
    headline: "Quality Buildings for Every Purpose",
    valueLine: "From residential homes to commercial complexes, we build structures that stand the test of time.",
    image: "/images/project3.DNG-dVBoe5BpkUtFAouTorn402Bn9Y5eef.jpeg",
    whatWeDo: [
      "Architectural planning and design",
      "Foundation and structural work",
      "Masonry and concrete work",
      "Roofing and waterproofing",
      "Electrical and plumbing installation",
      "Finishing and interior work",
    ],
    whatYouGet: [
      "Structurally sound buildings",
      "Energy-efficient designs",
      "Quality materials and workmanship",
      "Compliance with building codes",
      "Turnkey project delivery",
    ],
    timeline: "6-18 months depending on size",
    handover: ["Building plans", "Structural certificates", "Electrical and plumbing schematics", "Occupancy permit"],
  },
  {
    id: "industrial-works",
    title: "Industrial Works",
    slug: "industrial-works",
    headline: "Specialized Industrial Construction",
    valueLine:
      "Heavy-duty infrastructure for industrial facilities, including retaining walls and specialized structures.",
    image: "/images/industrialwork.png",
    whatWeDo: [
      "Industrial site preparation",
      "Heavy foundation work",
      "Retaining wall construction",
      "Steel structure fabrication",
      "Tank and vessel installation",
      "Industrial flooring and paving",
    ],
    whatYouGet: [
      "Safety-compliant structures",
      "Load-bearing capacity guaranteed",
      "Minimal operational disruption",
      "HSE-focused execution",
      "Industrial-grade materials",
    ],
    timeline: "4-12 months depending on complexity",
    handover: ["Engineering drawings", "Load test certificates", "Safety inspection reports", "Maintenance protocols"],
  },
  {
    id: "project-management",
    title: "Project Management & Inspection",
    slug: "project-management",
    headline: "Professional Oversight for Your Projects",
    valueLine:
      "Ensure quality, timeline, and budget compliance with expert project management and inspection services.",
    image: "/images/projectmanagement.png",
    whatWeDo: [
      "Project planning and scheduling",
      "Quality control and assurance",
      "Site supervision and coordination",
      "Progress monitoring and reporting",
      "Budget and cost management",
      "Contractor performance evaluation",
    ],
    whatYouGet: [
      "On-time project completion",
      "Budget adherence",
      "Quality assurance",
      "Risk mitigation",
      "Regular progress reports",
    ],
    timeline: "Duration of your project",
    handover: ["Final inspection report", "Quality certificates", "Project documentation", "Handover checklist"],
  },
  {
    id: "facility-services",
    title: "Facility Services",
    slug: "facility-services",
    headline: "Ongoing Maintenance and Facility Management",
    valueLine: "Keep your facilities in optimal condition with our comprehensive maintenance and management services.",
    image: "/images/facility-maintenance-worker-inspection.png",
    whatWeDo: [
      "Preventive maintenance programs",
      "Repair and restoration work",
      "Facility cleaning and upkeep",
      "Equipment servicing",
      "Emergency response services",
      "Facility audits and assessments",
    ],
    whatYouGet: [
      "Extended asset lifespan",
      "Reduced downtime",
      "Cost-effective maintenance",
      "24/7 emergency support",
      "Detailed service records",
    ],
    timeline: "Ongoing service contracts",
    handover: ["Service reports", "Maintenance logs", "Equipment records", "Performance metrics"],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "Organization",
              name: "Sinocle Nigeria Limited",
              url: "https://buildwithsinocle.com",
            },
            serviceType: "Construction Services",
            areaServed: {
              "@type": "Country",
              name: "Nigeria",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Construction Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.valueLine,
                },
              })),
            },
          }),
        }}
      />

      <div className="pt-32">
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/about.png"
              alt="Construction services background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(14,58,47,0.12)]" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-mid-green/20 border border-mid-green/30 px-4 py-2 rounded mb-6">
                <span className="!text-white font-bold text-md uppercase tracking-wide">
                  Professional Construction Services
                </span>
              </div>
              <h1 className="!text-white mb-6 text-2xl md:text-3xl font-bold">Comprehensive Infrastructure Solutions</h1>
              <p className="text-md text-white/80 leading-relaxed">
                Sinocle Nigeria Limited provides end-to-end construction services for government agencies, private
                developers, and industrial clients. Our expertise spans civil engineering, building construction, and
                facility management across West Africa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/20">
                <div>
                  <div className="text-mid-green text-xl font-bold mb-1">5+</div>
                  <div className="text-white/70 text-md">West African countries in operation</div>
                </div>
                <div>
                  <div className="text-mid-green text-xl font-bold mb-1">100%</div>
                  <div className="text-white/70 text-md">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service details */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.slug}
            className={`section-spacing ${index % 2 === 0 ? "bg-white" : "bg-surface"}`}
          >
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative h-96 lg:h-[500px] rounded overflow-hidden shadow-2xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} in Nigeria`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-charcoal text-white px-4 py-2 rounded font-bold text-md uppercase tracking-wide">
                      {service.title}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-mid-green font-bold text-md uppercase tracking-wide mb-3">
                    Service {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mb-4 text-xl md:text-2xl">{service.headline}</h2>
                  <p className="text-md text-muted mb-8 leading-relaxed">{service.valueLine}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* What we do */}
                    <div>
                      <h3 className="text-md font-bold mb-4 text-foreground uppercase tracking-wide">Capabilities</h3>
                      <ul className="space-y-3">
                        {service.whatWeDo.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-mid-green flex-shrink-0 mt-0.5" />
                            <span className="text-muted text-md leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What you get */}
                    <div>
                      <h3 className="text-md font-bold mb-4 text-foreground uppercase tracking-wide">Deliverables</h3>
                      <ul className="space-y-3">
                        {service.whatYouGet.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-charcoal flex-shrink-0 mt-0.5" />
                            <span className="text-muted text-md leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-surface border-l-4 border-mid-green p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-mid-green flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold text-md text-foreground mb-1 uppercase tracking-wide">
                            Project Timeline
                          </div>
                          <div className="text-md text-muted">{service.timeline}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileCheck className="h-4 w-4 text-mid-green flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold text-md text-foreground mb-1 uppercase tracking-wide">
                            Documentation
                          </div>
                          <div className="text-md text-muted">{service.handover.join(", ")}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={addUTMParams(getWhatsAppUrl("site-visit"), `services-${service.slug}`, "website")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-ink text-white font-bold px-5 py-3 md:px-4 md:py-2.5 text-md rounded transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Request Technical Consultation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="section-spacing bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-mid-green via-transparent to-transparent" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="!text-white mb-6 text-xl md:text-2xl">Partner With Nigeria's Leading Construction Firm</h2>
              <p className="text-md text-white/80 mb-10 leading-relaxed">
                Request a detailed technical proposal within 48 hours or schedule an on-site consultation with our
                engineering team.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={addUTMParams(getWhatsAppUrl("quote"), "services-bottom-quote", "website")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-mid-green hover:bg-mid-green/90 text-white font-bold px-6 py-3 md:px-5 md:py-2.5 text-md rounded transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  Request Technical Proposal
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={addUTMParams(getWhatsAppUrl("site-visit"), "services-bottom-visit", "website")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-charcoal font-bold px-6 py-3 md:px-5 md:py-2.5 text-md rounded transition-all duration-300"
                >
                  Schedule Site Inspection
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
