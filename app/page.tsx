import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { ContactBand } from "@/components/contact-band"
import { BreadcrumbSchema } from "@/components/json-ld-schemas"
import { CertificationsBar } from "@/components/certifications-bar"

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://sinoclenigeria.com",
          },
        ]}
      />
      <Hero />
      <CertificationsBar />
      <ServicesGrid />
      <ProjectsCarousel />
      <ContactBand />
    </>
  )
}
