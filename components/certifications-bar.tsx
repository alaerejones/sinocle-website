import { Award, Shield, FileCheck, Users } from "lucide-react"

export function CertificationsBar() {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
    },
    {
      icon: Shield,
      title: "HSE Compliant",
      subtitle: "Nigerian Standards",
    },
    {
      icon: FileCheck,
      title: "CAC Registered",
      subtitle: "RC 1234567",
    },
    {
      icon: Users,
      title: "COREN Certified",
      subtitle: "Professional Engineers",
    },
  ]

  return (
    <section className="py-12 bg-surface border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm leading-tight">{cert.title}</div>
                  <div className="text-muted-light text-xs mt-0.5">{cert.subtitle}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
