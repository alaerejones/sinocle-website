"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, MessageCircle, Clock, Upload, X, Building2 } from "lucide-react"
import { CONTACT, SERVICES, BUDGET_BANDS, TIMELINES } from "@/lib/constants"
import { getWhatsAppUrl, addUTMParams } from "@/lib/whatsapp"
import { trackFormStart, trackFormSubmit, trackFileUpload } from "@/lib/analytics"

type FormType = "quote" | "site-visit" | "tender"

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType>("quote")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasStartedForm, setHasStartedForm] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!hasStartedForm) {
      trackFormStart(activeForm)
      setHasStartedForm(true)
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      const totalSize = newFiles.reduce((acc, file) => acc + file.size, 0)

      trackFileUpload(newFiles.length, totalSize)

      setFiles([...files, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    trackFormSubmit(activeForm, formData)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const filenames = files.map((f) => f.name)
    const whatsappUrl = addUTMParams(
      getWhatsAppUrl("general", {
        name: formData.name,
        company: formData.company,
        service: formData.service,
        location: formData.location,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        filenames,
      }),
      `contact-${activeForm}`,
      "website",
    )

    window.open(whatsappUrl, "_blank")

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      location: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    })
    setFiles([])
    setIsSubmitting(false)
    setHasStartedForm(false)
  }

  return (
    <div className="pt-20">
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/building-construction-site-nigeria.jpg"
            alt="Contact us background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(14,58,47,0.12)]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent/20 border border-accent/30 px-4 py-2 rounded mb-6">
              <span className="!text-white font-bold text-md uppercase tracking-wide">Contact Us</span>
            </div>
            <h1 className="!text-white mb-6 text-2xl md:text-3xl font-bold">Start Your Infrastructure Project</h1>
            <p className="text-md text-white/80 leading-relaxed mb-10">
              Connect with our engineering team to discuss project requirements, request technical proposals, or
              schedule on-site consultations. We respond to all inquiries within 24 hours.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/20">
              <div>
                <div className="text-accent text-xl font-bold mb-1">24hrs</div>
                <div className="text-white/70 text-md">Response Time</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-1">48hrs</div>
                <div className="text-white/70 text-md">Quote Turnaround</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-1">24/7</div>
                <div className="text-white/70 text-md">WhatsApp Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface rounded p-6 border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 rounded w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground uppercase tracking-wide text-md">Head Office</h3>
              </div>
              <p className="text-muted text-md leading-relaxed">
                {CONTACT.address.street}
                <br />
                {CONTACT.address.city}
                <br />
                {CONTACT.address.state}
                <br />
                {CONTACT.address.country}
              </p>
            </div>

            <div className="bg-surface rounded p-6 border-l-4 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent/10 rounded w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground uppercase tracking-wide text-md">Phone</h3>
              </div>
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-muted text-md hover:text-primary transition-colors font-medium"
              >
                {CONTACT.phone}
              </a>
            </div>

            <div className="bg-surface rounded p-6 border-l-4 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent/10 rounded w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground uppercase tracking-wide text-md">Email</h3>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-md hover:text-primary transition-colors break-all font-medium"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="bg-surface rounded p-6 border-l-4 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#25D366]/10 rounded w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </div>
                <h3 className="font-bold text-foreground uppercase tracking-wide text-md">WhatsApp</h3>
              </div>
              <a
                href={addUTMParams(CONTACT.whatsapp.url, "contact-card", "website")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-md hover:text-primary transition-colors font-medium"
              >
                Chat with us
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-surface rounded h-80 flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="h-10 w-10 text-muted mx-auto mb-4" />
              <p className="text-muted font-medium text-md">
                {CONTACT.address.street}, {CONTACT.address.city}, {CONTACT.address.state}
              </p>
              <p className="text-muted-light text-md mt-2">Interactive map integration available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="section-spacing bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-accent font-bold text-md uppercase tracking-wide mb-4">Request Information</div>
              <h2 className="mb-4 text-xl md:text-2xl">How Can We Assist You?</h2>
              <p className="text-md text-muted">
                Select the type of inquiry below and provide project details. Our team will respond within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <button
                onClick={() => setActiveForm("quote")}
                className={`px-5 py-3 md:px-4 md:py-2 rounded font-bold transition-colors uppercase tracking-wide text-xs ${
                  activeForm === "quote"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-muted hover:bg-accent hover:text-white border border-border"
                }`}
              >
                Request Quote
              </button>
              <button
                onClick={() => setActiveForm("site-visit")}
                className={`px-5 py-3 md:px-4 md:py-2 rounded font-bold transition-colors uppercase tracking-wide text-xs ${
                  activeForm === "site-visit"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-muted hover:bg-accent hover:text-white border border-border"
                }`}
              >
                Site Inspection
              </button>
              <button
                onClick={() => setActiveForm("tender")}
                className={`px-5 py-3 md:px-4 md:py-2 rounded font-bold transition-colors uppercase tracking-wide text-xs ${
                  activeForm === "tender"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-muted hover:bg-accent hover:text-white border border-border"
                }`}
              >
                Submit Tender/RFQ
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded p-10 shadow-2xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-md font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-md font-medium text-foreground mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-md font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-md font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-md font-medium text-foreground mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-md font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-md font-medium text-foreground mb-2">
                    Budget Band *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select budget range</option>
                    {BUDGET_BANDS.map((band) => (
                      <option key={band} value={band}>
                        {band}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-md font-medium text-foreground mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select timeline</option>
                    {TIMELINES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-md font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>

              {/* File upload for tender form */}
              {activeForm === "tender" && (
                <div className="mb-6">
                  <label className="block text-md font-medium text-foreground mb-2">
                    Upload Documents (PDF, DOCX, XLSX, JPG, PNG - Max 25MB each)
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted mx-auto mb-2" />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-accent hover:text-accent-hover font-medium">Click to upload</span>
                      <span className="text-muted"> or drag and drop</span>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        accept=".pdf,.docx,.xlsx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* File list */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-surface-accent rounded-lg p-3">
                          <span className="text-md text-muted truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-muted hover:text-primary transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 md:px-5 md:py-2.5 text-md rounded transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg uppercase tracking-wide"
              >
                {isSubmitting ? "Processing..." : "Submit & Continue to WhatsApp"}
              </button>

              <p className="text-md text-muted text-center mt-6 leading-relaxed">
                After submission, you'll be redirected to WhatsApp to complete your inquiry with our engineering team.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Business hours */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface rounded p-10 border-l-4 border-accent">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent/10 rounded w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Business Hours</h2>
                  <p className="text-muted text-md">Nigerian Time (WAT)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="font-bold text-foreground mb-2 uppercase tracking-wide text-md">Weekdays</div>
                  <div className="text-muted">Monday - Friday</div>
                  <div className="text-foreground font-bold">8:00 AM - 6:00 PM</div>
                </div>
                <div>
                  <div className="font-bold text-foreground mb-2 uppercase tracking-wide text-md">Saturday</div>
                  <div className="text-muted">Half Day</div>
                  <div className="text-foreground font-bold">9:00 AM - 2:00 PM</div>
                </div>
                <div>
                  <div className="font-bold text-foreground mb-2 uppercase tracking-wide text-md">Sunday</div>
                  <div className="text-muted">Closed</div>
                  <div className="text-muted-light text-md mt-1">Emergency: WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
