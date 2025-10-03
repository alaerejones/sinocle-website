import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MapPin, Calendar, Briefcase, CheckCircle, ArrowLeft } from "lucide-react"
import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"

interface ProjectDetail {
  id: string
  title: string
  location: string
  state: string
  service: string
  scope: string
  result: string
  duration: string
  client: string
  images: string[]
  challenges: string[]
  solutions: string[]
  outcomes: string[]
}

const projectDetails: Record<string, ProjectDetail> = {
  "drainage-oshimili": {
    id: "drainage-oshimili",
    title: "Drainage Construction",
    location: "Oshimili South",
    state: "Delta State",
    service: "Drainage Systems",
    scope: "Construction of comprehensive drainage system to address flooding in residential areas",
    result: "Reduced flooding by 85% in the local community, protecting over 500 homes",
    duration: "6 months",
    client: "Oshimili South Local Government",
    images: [
      "/images/1-NLHAjuQI0c9iOTX13ZriSrz73rE3q4.png",
      "/images/2-TCbx0UeyrPJ9gYrAAJ5T2gqrlx2MTY.png",
      "/images/frame-WlO9KompB5mlMQokP4xoAbihOsj4Yg.png",
    ],
    challenges: [
      "Existing infrastructure constraints",
      "High water table in the area",
      "Coordination with residential activities",
    ],
    solutions: [
      "Phased construction approach to minimize disruption",
      "Advanced drainage design with proper gradient calculations",
      "Community engagement and regular updates",
    ],
    outcomes: [
      "85% reduction in flooding incidents",
      "Protected over 500 residential properties",
      "Improved public health and sanitation",
      "Enhanced property values in the area",
    ],
  },
  "road-ethiope": {
    id: "road-ethiope",
    title: "Road Construction",
    location: "Ethiope East LGA",
    state: "Delta State",
    service: "Road Construction",
    scope: "5km road construction with asphalt surfacing and drainage",
    result: "Completed 2 weeks ahead of schedule, connecting 3 communities",
    duration: "8 months",
    client: "Delta State Government",
    images: [
      "/images/infrastructure-B5oqZ48HPsweqV6uCrZDAmURIoPFni.jpg",
      "/images/1-NLHAjuQI0c9iOTX13ZriSrz73rE3q4.png",
      "/images/frame-WlO9KompB5mlMQokP4xoAbihOsj4Yg.png",
    ],
    challenges: [
      "Poor soil conditions requiring extensive earthworks",
      "Rainy season construction challenges",
      "Traffic management during construction",
    ],
    solutions: [
      "Comprehensive soil stabilization program",
      "Weather-adaptive construction scheduling",
      "Effective traffic diversion and signage",
    ],
    outcomes: [
      "5km of durable road infrastructure",
      "Connected 3 previously isolated communities",
      "Reduced travel time by 40%",
      "Completed 2 weeks ahead of schedule",
    ],
  },
  "retaining-wall-kwale": {
    id: "retaining-wall-kwale",
    title: "124-metre Propane Tank Bullet Retaining Wall",
    location: "Kwale",
    state: "Delta State",
    service: "Industrial Works",
    scope: "Design and construction of industrial-grade retaining wall for propane storage facility",
    result: "Safety-compliant structure completed with zero HSE incidents",
    duration: "5 months",
    client: "Private Industrial Client",
    images: [
      "/images/project4.png-tKEt90MtQ9xaMBT9griXzkSODOECop.jpeg",
      "/images/project3.DNG-dVBoe5BpkUtFAouTorn402Bn9Y5eef.jpeg",
      "/images/3.png-FKDttiUesUVKlpYpWczzUS7qbJ9OhG.jpeg",
    ],
    challenges: [
      "Stringent safety requirements for propane storage",
      "Load-bearing capacity specifications",
      "Working in active industrial environment",
    ],
    solutions: [
      "Rigorous HSE protocols and daily safety briefings",
      "Advanced engineering design with safety margins",
      "Coordinated scheduling with facility operations",
    ],
    outcomes: [
      "124-metre safety-compliant retaining wall",
      "Zero HSE incidents during construction",
      "Passed all structural load tests",
      "Enhanced facility safety standards",
    ],
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projectDetails[params.id]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - ${project.location}, ${project.state} | Sinocle Nigeria`,
    description: `${project.scope}. ${project.result}`,
    keywords: [project.service, project.location, project.state, "construction project Nigeria"],
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id]

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Project",
            name: project.title,
            description: project.scope,
            location: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: project.location,
                addressRegion: project.state,
                addressCountry: "Nigeria",
              },
            },
            provider: {
              "@type": "Organization",
              name: "Sinocle Nigeria Limited",
            },
          }),
        }}
      />

      <div className="pt-32">
        {/* Back button */}
        <div className="container py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        {/* Hero image */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={project.images[0] || "/placeholder.svg"}
            alt={`${project.title}, ${project.location}, ${project.state}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container pb-8">
            <div className="bg-accent text-white text-md font-medium px-4 py-2 rounded-full inline-block mb-4">
              {project.service}
            </div>
            <h1 className="text-white mb-2">{project.title}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">
                {project.location}, {project.state}
              </span>
            </div>
          </div>
        </section>

        {/* Project details */}
        <section className="section-spacing bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                {/* Overview */}
                <div className="mb-12">
                  <h2 className="mb-4">Project Overview</h2>
                  <p className="text-lg text-muted leading-relaxed mb-4">{project.scope}</p>
                  <p className="text-lg text-primary font-medium">{project.result}</p>
                </div>

                {/* Challenges */}
                <div className="mb-12">
                  <h2 className="mb-4">Challenges</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-surface-accent rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                        </div>
                        <span className="text-muted leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-12">
                  <h2 className="mb-4">Our Solutions</h2>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted leading-relaxed">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="mb-12">
                  <h2 className="mb-4">Project Outcomes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.outcomes.map((outcome, index) => (
                      <div key={index} className="bg-surface-accent rounded-lg p-4">
                        <CheckCircle className="h-6 w-6 text-primary mb-2" />
                        <p className="text-muted leading-relaxed">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="mb-4">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-surface-accent rounded-lg p-6 sticky top-36">
                  <h3 className="text-xl font-bold mb-6">Project Details</h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium">Location</span>
                      </div>
                      <p className="text-muted">
                        {project.location}, {project.state}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <Briefcase className="h-5 w-5" />
                        <span className="font-medium">Service</span>
                      </div>
                      <p className="text-muted">{project.service}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <Calendar className="h-5 w-5" />
                        <span className="font-medium">Duration</span>
                      </div>
                      <p className="text-muted">{project.duration}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <Briefcase className="h-5 w-5" />
                        <span className="font-medium">Client</span>
                      </div>
                      <p className="text-muted">{project.client}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-bold mb-3">Start Your Project</h4>
                    <p className="text-md text-muted mb-4">
                      Ready to discuss your construction needs? Book a site visit today.
                    </p>
                    <a
                      href={addUTMParams(getWhatsAppUrl("site-visit"), `project-${project.id}`, "website")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
                    >
                      Book a Site Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
