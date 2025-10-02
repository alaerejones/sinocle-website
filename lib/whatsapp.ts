import { CONTACT } from "./constants"

type WhatsAppMessageType = "call" | "email" | "quote" | "site-visit" | "tender" | "general"

interface LeadData {
  name?: string
  company?: string
  service?: string
  location?: string
  budget?: string
  timeline?: string
  message?: string
  filenames?: string[]
}

export function getWhatsAppUrl(type: WhatsAppMessageType, data?: LeadData): string {
  const baseUrl = CONTACT.whatsapp.url
  let message = ""

  switch (type) {
    case "call":
      message = "Hello, I found your number on the website and would like to discuss a project."
      break
    case "email":
      message = "Hello, I would like to get in touch regarding a construction project."
      break
    case "quote":
      message = "Hello, I would like to request a 48-hour quote for a project."
      break
    case "site-visit":
      message = "Hello, I would like to book a site visit to discuss a project."
      break
    case "tender":
      message = "Hello, I would like to submit a tender/RFQ for review."
      break
    case "general":
      if (data) {
        message = `[Lead] ${data.name || "N/A"} - ${data.company || "N/A"}
Service: ${data.service || "N/A"}
Location: ${data.location || "N/A"}
Budget: ${data.budget || "N/A"}
Timeline: ${data.timeline || "N/A"}
Details: ${data.message || "N/A"}${data.filenames?.length ? `\nFiles: ${data.filenames.join(", ")}` : ""}`
      }
      break
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}

export function addUTMParams(url: string, source: string, medium = "website"): string {
  const urlObj = new URL(url)
  urlObj.searchParams.set("utm_source", source)
  urlObj.searchParams.set("utm_medium", medium)
  return urlObj.toString()
}
