import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { OrganizationSchema, LocalBusinessSchema } from "@/components/json-ld-schemas"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sinoclenigeria.com"),
  title: {
    default: "Sinocle Nigeria Limited - Construction Company in Delta, Nigeria",
    template: "%s | Sinocle Nigeria Limited",
  },
  description:
    "Professional construction services across Nigeria. Roads, drainage, buildings, and facility management. Government and private projects in Delta, Lagos, and Abuja.",
  keywords: [
    "construction company Nigeria",
    "road construction Delta",
    "drainage contractor Nigeria",
    "building contractor Asaba",
    "project management Nigeria",
    "facility maintenance",
    "construction services Lagos",
    "construction services Abuja",
    "Nigerian construction company",
    "infrastructure development Nigeria",
  ],
  authors: [{ name: "Sinocle Nigeria Limited" }],
  creator: "Sinocle Nigeria Limited",
  publisher: "Sinocle Nigeria Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sinoclenigeria.com",
    title: "Sinocle Nigeria Limited - Construction Company",
    description: "Construction that delivers on time and to spec across Nigeria",
    siteName: "Sinocle Nigeria Limited",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Sinocle Nigeria Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sinocle Nigeria Limited - Construction Company",
    description: "Construction that delivers on time and to spec across Nigeria",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
