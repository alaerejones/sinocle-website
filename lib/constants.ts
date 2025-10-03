export const CONTACT = {
  whatsapp: {
    number: "+2348104064868",
    url: "https://wa.me/2348104064868",
  },
  phone: "+234 810 406 4868",
  email: "info@buildwithsinocle.com",
  address: {
    street: "6 Ochokwu St, off Okpanam Road, Central Area",
    city: "Asaba 320242",
    state: "Delta State",
    country: "Nigeria",
  },
  schedule: "https://sinocle.com/consult",
} as const

export const SERVICES = [
  {
    id: "roads",
    title: "Road Construction",
    slug: "road-construction",
    description: "Durable road infrastructure built to standards",
  },
  {
    id: "drainage",
    title: "Drainage Systems",
    slug: "drainage-systems",
    description: "Comprehensive drainage solutions for flood prevention",
  },
  {
    id: "buildings",
    title: "Building Construction",
    slug: "building-construction",
    description: "Residential, commercial, and industrial structures",
  },
  {
    id: "industrial",
    title: "Industrial Works",
    slug: "industrial-works",
    description: "Specialized industrial construction and infrastructure",
  },
  {
    id: "project-management",
    title: "Project Management & Inspection",
    slug: "project-management",
    description: "Professional oversight and quality assurance",
  },
  {
    id: "facility",
    title: "Facility Services",
    slug: "facility-services",
    description: "Ongoing maintenance and facility management",
  },
] as const

export const REGIONS = ["Delta", "Lagos", "Abuja", "Others"] as const

export const BUDGET_BANDS = ["Under ₦5M", "₦5M - ₦20M", "₦20M - ₦50M", "₦50M - ₦100M", "Over ₦100M"] as const

export const TIMELINES = ["Less than 3 months", "3-6 months", "6-12 months", "Over 12 months"] as const
