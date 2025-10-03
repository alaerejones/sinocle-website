import type { Metadata } from "next"
import { Shield, Target, Users, Award, TrendingUp, CheckCircle } from "lucide-react"
import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "About Sinocle Nigeria Limited - Construction Company in Delta",
  description:
    "Learn about Sinocle Nigeria Limited, a trusted construction company delivering quality roads, drainage, buildings, and facility services across Nigeria since our founding.",
  keywords: ["construction company Nigeria", "about Sinocle", "construction services Delta", "Nigerian contractor"],
}

const timeline = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Established in Delta State with a vision to deliver quality construction across Nigeria",
  },
  {
    year: "2015",
    title: "Regional Expansion",
    description: "Extended operations to Lagos and Abuja, serving government and private clients",
  },
  {
    year: "2020",
    title: "150+ Projects",
    description: "Reached milestone of 150 completed projects with zero major HSE incidents",
  },
  {
    year: "2025",
    title: "Industry Leader",
    description: "Recognized as a trusted partner for complex construction projects across 5 states",
  },
]

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We maintain the highest HSE standards on every project, protecting our workers, clients, and communities.",
  },
  {
    icon: Target,
    title: "Quality Delivery",
    description: "We deliver projects on time and to spec, using quality materials and proven construction methods.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work closely with clients from planning to handover, ensuring transparency and satisfaction.",
  },
]

const team = [
  {
    name: "Engineering Team",
    role: "Design & Planning",
    description: "Experienced engineers ensuring structural integrity and compliance",
  },
  {
    name: "Project Management",
    role: "Execution & Oversight",
    description: "Dedicated managers coordinating resources and timelines",
  },
  {
    name: "HSE Department",
    role: "Safety & Compliance",
    description: "Safety professionals maintaining zero-incident standards",
  },
  {
    name: "Quality Assurance",
    role: "Testing & Inspection",
    description: "Specialists ensuring materials and workmanship meet specifications",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/23.png-cfH6ISHUk6SAP2PSppBtJWAhXT4hy2.jpeg"
            alt="About Sinocle background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[rgba(14,58,47,0.18)]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent/20 border border-accent/30 px-4 py-2 rounded mb-6">
              <span className="text-accent font-bold text-md uppercase tracking-wide">About Sinocle Nigeria</span>
            </div>
            <h1 className="text-white mb-6 text-2xl md:text-3xl font-bold">
              West Africa's Trusted Infrastructure Partner
            </h1>
            <p className="text-md text-white/80 leading-relaxed mb-10">
              For over 15 years, Sinocle Nigeria Limited has delivered critical infrastructure projects across Nigeria.
              We combine technical excellence, safety leadership, and local expertise to serve government agencies and
              private sector clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/20">
              <div>
                <div className="text-accent text-xl font-bold mb-1">2010</div>
                <div className="text-white/70 text-md">Year Founded</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-1">150+</div>
                <div className="text-white/70 text-md">Projects Delivered</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-1">200+</div>
                <div className="text-white/70 text-md">Team Members</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-1">₦2.5B+</div>
                <div className="text-white/70 text-md">Infrastructure Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company summary */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-accent font-bold text-md uppercase tracking-wide mb-4">Our Company</div>
              <h2 className="mb-6 text-xl md:text-2xl">Engineering Nigeria's Future Infrastructure</h2>
              <div className="space-y-6 text-muted leading-relaxed">
                <p className="text-md">
                  Sinocle Nigeria Limited is a leading construction and civil engineering firm specializing in
                  large-scale infrastructure development. Since 2010, we have delivered over 150 projects across Delta,
                  Lagos, Abuja, and neighboring states.
                </p>
                <p className="text-md">
                  Our multidisciplinary team of COREN-certified engineers, project managers, and skilled technicians
                  brings deep technical expertise and local market knowledge to every engagement. We understand the
                  unique challenges of construction in Nigeria and have developed proven methodologies to deliver
                  projects on time, within budget, and to international quality standards.
                </p>
                <p className="text-md">
                  With ISO 9001:2015 certification and a track record of zero major HSE incidents, we have earned the
                  trust of government agencies, multinational corporations, and private developers who demand
                  reliability, transparency, and measurable results.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground text-md">ISO 9001:2015 Certified</div>
                    <div className="text-muted text-xs">Quality Management System</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground text-md">COREN Registered</div>
                    <div className="text-muted text-xs">Professional Engineering Team</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground text-md">CAC Registered</div>
                    <div className="text-muted text-xs">RC 1234567</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground text-md">Zero HSE Incidents</div>
                    <div className="text-muted text-xs">2024 Safety Record</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded overflow-hidden shadow-2xl">
              <img
                src="/images/23.png-cfH6ISHUk6SAP2PSppBtJWAhXT4hy2.jpeg"
                alt="Sinocle site supervisor inspecting construction project in Nigeria"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-surface">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-accent font-bold text-md uppercase tracking-wide mb-4">Company History</div>
            <h2 className="mb-4 text-xl md:text-2xl">15 Years of Infrastructure Excellence</h2>
            <p className="text-md text-muted max-w-2xl mx-auto">
              From our founding in Delta State to becoming a trusted construction partner across West Africa.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded p-6 shadow-lg h-full">
                    <div className="bg-primary text-white font-bold text-lg px-4 py-2 rounded inline-block mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-md font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted text-md leading-relaxed">{item.description}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-accent font-bold text-md uppercase tracking-wide mb-4">Core Values</div>
            <h2 className="mb-4 text-xl md:text-2xl">Principles That Guide Our Work</h2>
            <p className="text-md text-muted max-w-2xl mx-auto">
              The foundational values that inform every project decision and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-surface rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-foreground uppercase tracking-wide">{value.title}</h3>
                  <p className="text-muted leading-relaxed text-md">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* HSE */}
      <section className="section-spacing bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-10 w-10 text-accent mx-auto mb-8" />
            <div className="text-accent font-bold text-md uppercase tracking-wide mb-4">
              Health, Safety & Environment
            </div>
            <h2 className="text-foreground mb-6 text-xl md:text-2xl">Zero-Incident Safety Culture</h2>
            <p className="text-md text-muted leading-relaxed mb-8">
              Safety is our top operational priority. We maintain rigorous HSE protocols on every project site,
              including daily safety briefings, mandatory PPE compliance, continuous hazard monitoring, and regular
              third-party audits. Our commitment to safety excellence has resulted in zero major HSE incidents across
              all active projects in 2024.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-muted/20">
              <div>
                <div className="text-accent text-xl font-bold mb-2">0</div>
                <div className="text-muted text-md uppercase tracking-wide">Major HSE Incidents (2024)</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-2">100%</div>
                <div className="text-muted text-md uppercase tracking-wide">PPE Compliance Rate</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-2">Daily</div>
                <div className="text-muted text-md uppercase tracking-wide">Safety Briefings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-surface">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-accent font-bold text-md uppercase tracking-wide mb-4">Our Team</div>
            <h2 className="mb-4 text-xl md:text-2xl">Multidisciplinary Expertise</h2>
            <p className="text-md text-muted max-w-2xl mx-auto">
              COREN-certified engineers, experienced project managers, and skilled technicians dedicated to delivering
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded p-6 text-center shadow-lg">
                <div className="bg-primary text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-md font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-accent text-md font-bold mb-4 uppercase tracking-wide">{member.role}</p>
                <p className="text-muted text-md leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-accent font-bold text-md uppercase tracking-wide mb-4">Get In Touch</div>
            <h2 className="mb-6 text-xl md:text-2xl">Discuss Your Infrastructure Project</h2>
            <p className="text-md text-muted mb-10 leading-relaxed">
              Connect with our engineering team to discuss project requirements, timelines, and technical
              specifications. We respond to all inquiries within 24 hours.
            </p>
            <a
              href={addUTMParams(getWhatsAppUrl("general"), "about-cta", "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 md:px-5 md:py-2.5 text-md rounded transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Engineering Team
              <TrendingUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
