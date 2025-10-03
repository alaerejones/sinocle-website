# Sinocle Nigeria Limited - Production Website

Professional construction company website built with Next.js, featuring comprehensive services, project showcases, and WhatsApp-integrated contact system.

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **WhatsApp Integration**: All contact methods route to WhatsApp with prefilled messages
- **SEO Optimized**: Comprehensive metadata, JSON-LD schemas, sitemap, and robots.txt
- **Analytics Ready**: Event tracking for forms, clicks, and user interactions
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient code splitting

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: DM Sans (Google Fonts)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx              # Home page
│   ├── services/page.tsx     # Services listing
│   ├── projects/             # Projects pages
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact page with forms
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # Robots.txt
│   └── api/lead/route.ts     # Lead submission API
├── components/
│   ├── header.tsx            # Sticky header with contact bar
│   ├── footer.tsx            # Footer with watermark logo
│   ├── back-to-top.tsx       # Scroll to top button
│   └── json-ld-schemas.tsx   # SEO schemas
├── lib/
│   ├── constants.ts          # App constants
│   ├── whatsapp.ts           # WhatsApp utilities
│   └── analytics.ts          # Analytics tracking
└── public/
    └── /images/               # Project images and assets
\`\`\`

## Key Pages

### Home (/)
- Hero with Nigerian construction imagery
- Services grid (6 services)
- Animated stats strip
- Projects carousel
- Contact band

### Services (/services)
- Detailed service descriptions
- "What We Do" and "What You Get" lists
- Timeline and handover specifications
- WhatsApp CTAs

### Projects (/projects)
- Filterable project grid (by region and service)
- Individual case study pages
- Project galleries
- Challenges, solutions, and outcomes

### About (/about)
- Company history and timeline
- Core values
- HSE commitment
- Team overview

### Contact (/contact)
- Contact information cards
- Three conditional forms:
  - Get a Quote
  - Request a Site Visit
  - Submit Tender/RFQ
- File upload for tenders
- WhatsApp integration

## WhatsApp Integration

All contact methods (phone, email, forms) route to WhatsApp with prefilled messages:

- **Phone clicks**: Opens WhatsApp with call inquiry message
- **Email clicks**: Opens WhatsApp with email inquiry message
- **Form submissions**: Opens WhatsApp with structured lead data
- **UTM tracking**: All WhatsApp links include source tracking

## SEO Features

- Comprehensive metadata on all pages
- JSON-LD schemas:
  - Organization
  - LocalBusiness
  - Service
  - Project
  - BreadcrumbList
- Dynamic sitemap.xml
- Robots.txt configuration
- Open Graph and Twitter Card tags

## Analytics Tracking

Events tracked:
- `form_start`: When user begins filling a form
- `form_submit`: When form is submitted
- `file_upload`: When files are uploaded
- `phone_click`: Phone number clicks
- `email_click`: Email clicks
- `whatsapp_click`: WhatsApp button clicks

## Brand Colors

- **Deep Green** (#0E3A2F): Primary brand color
- **Mid Green** (#5BAF8A): Accent color
- **Mint** (#E9F5F0): Soft backgrounds
- **Ink** (#111418): Headings
- **Text Gray** (#606B75): Body text
- **Line Gray** (#E6E9ED): Borders
- **Off White** (#F7F9FA): Page background

## Contact Information

- **Phone**: +234 810 406 4868
- **Email**: info@sinoclenigeria.com
- **WhatsApp**: https://wa.me/2348104064868
- **Location**: Asaba, Delta State, Nigeria

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## License

© 2025 Sinocle Nigeria Limited. All rights reserved.
