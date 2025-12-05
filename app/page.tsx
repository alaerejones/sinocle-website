import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { ContactBand } from "@/components/contact-band"
import { BreadcrumbSchema } from "@/components/json-ld-schemas"
import { CertificationsBar } from "@/components/certifications-bar"

console.log("HERO:", typeof Hero)
console.log("SERVICES:", typeof ServicesGrid)
console.log("PROJECTS:", typeof ProjectsCarousel)
console.log("CONTACT:", typeof ContactBand)
console.log("BREADCRUMB:", typeof BreadcrumbSchema)
console.log("CERTIFICATIONS:", typeof CertificationsBar)

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://buildwithsinocle.com",
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
