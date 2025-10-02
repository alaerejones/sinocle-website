// Analytics tracking utilities

export type AnalyticsEvent =
  | "form_start"
  | "form_submit"
  | "file_upload"
  | "phone_click"
  | "email_click"
  | "whatsapp_click"

interface EventProperties {
  [key: string]: string | number | boolean
}

export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  // Log to console for debugging
  console.log("[v0] Analytics Event:", event, properties)

  // In production, this would send to your analytics service
  // Example: Google Analytics, Mixpanel, etc.
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", event, properties)
  }
}

export function trackFormStart(formType: string) {
  trackEvent("form_start", {
    form_type: formType,
    timestamp: new Date().toISOString(),
  })
}

export function trackFormSubmit(formType: string, data: Record<string, any>) {
  trackEvent("form_submit", {
    form_type: formType,
    service: data.service || "unknown",
    location: data.location || "unknown",
    budget: data.budget || "unknown",
    timestamp: new Date().toISOString(),
  })
}

export function trackFileUpload(fileCount: number, totalSize: number) {
  trackEvent("file_upload", {
    file_count: fileCount,
    total_size_mb: (totalSize / (1024 * 1024)).toFixed(2),
    timestamp: new Date().toISOString(),
  })
}

export function trackContactClick(type: "phone" | "email" | "whatsapp", source: string) {
  trackEvent(`${type}_click`, {
    source,
    timestamp: new Date().toISOString(),
  })
}
