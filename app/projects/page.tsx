"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { REGIONS, SERVICES } from "@/lib/constants"

interface Project {
  id: string
  title: string
  location: string
  state: string
  region: string
  service: string
  scope: string
  result: string
  image: string
}

const projects: Project[] = [
  {
    id: "drainage-oshimili",
    title: "Drainage Construction",
    location: "Oshimili South",
    state: "Delta State",
    region: "Delta",
    service: "Drainage Systems",
    scope: "Construction of comprehensive drainage system to address flooding in residential areas",
    result: "Reduced flooding by 85% in the local community, protecting over 500 homes",
    image: "/images/drainage-construction-project-nigeria.jpg",
  },
  {
    id: "road-ethiope",
    title: "Road Construction",
    location: "Ethiope East LGA",
    state: "Delta State",
    region: "Delta",
    service: "Road Construction",
    scope: "5km road construction with asphalt surfacing and drainage",
    result: "Completed 2 weeks ahead of schedule, connecting 3 communities",
    image: "/images/road-construction-nigeria-workers.jpg",
  },
  {
    id: "retaining-wall-kwale",
    title: "124-metre Propane Tank Bullet Retaining Wall",
    location: "Kwale",
    state: "Delta State",
    region: "Delta",
    service: "Industrial Works",
    scope: "Design and construction of industrial-grade retaining wall for propane storage facility",
    result: "Safety-compliant structure completed with zero HSE incidents",
    image: "/images/industrial-retaining-wall-construction.jpg",
  },
  {
    id: "commercial-building-lagos",
    title: "Commercial Office Complex",
    location: "Victoria Island",
    state: "Lagos",
    region: "Lagos",
    service: "Building Construction", 
    scope: "4-storey commercial building with modern amenities",
    result: "Delivered turnkey facility with full occupancy certification",
    image: "/images/commercial-building-construction-lagos.jpg",
  },
]

export default function ProjectsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All")
  const [selectedService, setSelectedService] = useState<string>("All")

  const filteredProjects = projects.filter((project) => {
    const regionMatch = selectedRegion === "All" || project.region === selectedRegion
    const serviceMatch = selectedService === "All" || project.service === selectedService
    return regionMatch && serviceMatch
  })

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nigerian-road-construction-project-with-workers-in.jpg"
            alt="Projects background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(14,58,47,0.12)]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-mid-green/20 border border-mid-green/30 px-4 py-2 rounded mb-6">
              <span className="text-mid-green font-bold text-md uppercase tracking-wide">Project Portfolio</span>
            </div>
            <h1 className="text-white mb-6 text-2xl md:text-3xl font-bold">Proven Track Record Across Nigeria</h1>
            <p className="text-md text-white/80 leading-relaxed mb-10">
              Explore our portfolio of successfully delivered infrastructure projects. From government contracts to
              private developments, we consistently deliver quality results on schedule and within budget.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/20">
              <div>
                <div className="text-mid-green text-xl font-bold mb-1">150+</div>
                <div className="text-white/70 text-md">Completed Projects</div>
              </div>
              <div>
                <div className="text-mid-green text-xl font-bold mb-1">₦2.5B+</div>
                <div className="text-white/70 text-md">Infrastructure Value</div>
              </div>
              <div>
                <div className="text-mid-green text-xl font-bold mb-1">98%</div>
                <div className="text-white/70 text-md">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-mid-green text-xl font-bold mb-1">5</div>
                <div className="text-white/70 text-md">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container">
          <div className="flex flex-wrap items-center gap-6">
            {/* Region filter */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-md text-muted font-medium">Region:</span>
              <button
                onClick={() => setSelectedRegion("All")}
                className={`px-3 py-1.5 md:px-2.5 md:py-1 rounded text-xs font-bold transition-colors uppercase tracking-wide ${
                  selectedRegion === "All"
                    ? "bg-charcoal text-white"
                    : "bg-surface text-muted hover:bg-mid-green hover:text-white"
                }`}
              >
                All
              </button>
              {REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 md:px-2.5 md:py-1 rounded text-xs font-bold transition-colors uppercase tracking-wide ${
                    selectedRegion === region
                      ? "bg-charcoal text-white"
                      : "bg-surface text-muted hover:bg-mid-green hover:text-white"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Service filter */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-md text-muted font-medium">Service:</span>
              <button
                onClick={() => setSelectedService("All")}
                className={`px-3 py-1.5 md:px-2.5 md:py-1 rounded text-xs font-bold transition-colors uppercase tracking-wide ${
                  selectedService === "All"
                    ? "bg-charcoal text-white"
                    : "bg-surface text-muted hover:bg-mid-green hover:text-white"
                }`}
              >
                All
              </button>
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.title)}
                  className={`px-3 py-1.5 md:px-2.5 md:py-1 rounded text-xs font-bold transition-colors uppercase tracking-wide ${
                    selectedService === service.title
                      ? "bg-charcoal text-white"
                      : "bg-surface text-muted hover:bg-mid-green hover:text-white"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-spacing bg-surface">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted text-md">No projects found matching your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title}, ${project.location}, ${project.state}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-charcoal text-white text-xs font-bold px-3 py-2 rounded uppercase tracking-wide">
                      {project.service}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-2 text-mid-green mb-3">
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-1" />
                      <span className="text-md font-bold uppercase tracking-wide">
                        {project.location}, {project.state}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-charcoal transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted text-md mb-4 leading-relaxed">{project.scope}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <p className="text-charcoal font-bold text-md">{project.result}</p>
                      <ArrowRight className="h-4 w-4 text-mid-green group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
