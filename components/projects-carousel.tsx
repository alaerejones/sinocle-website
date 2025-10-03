"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  location: string
  state: string
  result: string
  image: string
}

const featuredProjects: Project[] = [
  {
    id: "drainage-oshimili",
    title: "Drainage Construction",
    location: "Oshimili South",
    state: "Delta State",
    result: "Reduced flooding by 85% in the local community",
    image: "/images/drainage-construction-project-nigeria.jpg",
  },
  {
    id: "road-ethiope",
    title: "Road Construction",
    location: "Ethiope East LGA",
    state: "Delta State",
    result: "5km of durable road infrastructure completed ahead of schedule",
    image: "/images/road-construction-asphalt-laying-nigeria.jpg",
  },
  {
    id: "residential-delta",
    title: "Residential Development",
    location: "Delta",
    state: "Delta State",
    result: "Quality residential construction for private client",
    image: "/images/construction-project-manager-site-inspection.jpg",
  },
  {
    id: "commercial-lagos",
    title: "Commercial Project",
    location: "Lagos",
    state: "Lagos",
    result: "Commercial facility delivered on time and to spec",
    image: "/images/building-construction-site-nigeria.jpg",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const currentProject = featuredProjects[currentIndex]

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-xl md:text-2xl">Featured Projects</h2>
          <p className="text-md max-w-2xl mx-auto">
            Delivering quality construction across Nigeria with proven results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={currentProject.image || "/placeholder.svg"}
                alt={`${currentProject.title}, ${currentProject.location}, ${currentProject.state}`}
                className="w-full h-full object-cover transition-opacity duration-500"
                loading="eager"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-2 text-accent mb-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-md">
                  {currentProject.location}, {currentProject.state}
                </span>
              </div>
              <h3 className="text-xl mb-3">{currentProject.title}</h3>
              <p className="text-muted leading-relaxed mb-6 text-md">{currentProject.result}</p>
              <Link
                href={`/projects/${currentProject.id}`}
                className="inline-flex items-center text-primary hover:text-accent font-medium transition-colors text-md"
              >
                View case study →
              </Link>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={prev}
                className="pointer-events-auto bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="pointer-events-auto bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
