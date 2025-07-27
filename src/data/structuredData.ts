// Structured Data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ExotIQ.ai",
  "alternateName": "ExotIQ",
  "url": "https://exotiq.ai",
  "logo": "https://exotiq.ai/Exotiq%20Lockup.png",
  "description": "AI-powered fleet management platform for vehicle rental operations, Turo hosting, and car sharing businesses.",
  "foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "ExotIQ.ai Founding Team"
    }
  ],
  "industry": "Software as a Service (SaaS)",
  "numberOfEmployees": "2-10",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "Remote-first"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "email": "hello@exotiq.ai",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/exotiq-ai",
    "https://twitter.com/ExotIQai"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Software",
    "description": "Fleet management software for vehicle rental operations"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ExotIQ.ai Fleet Management Platform",
  "description": "AI-powered fleet management software that automates pricing, maintenance, and operations for vehicle rental businesses and Turo hosts.",
  "url": "https://exotiq.ai",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "description": "Starting at $49/month for up to 5 vehicles"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "20",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "AI-powered dynamic pricing",
    "Automated maintenance scheduling",
    "Real-time fleet analytics",
    "Multi-platform integration",
    "Direct booking portal",
    "Financial reporting",
    "Guest communication automation"
  ],
  "screenshot": "https://exotiq.ai/Exotiq%20Lockup.png",
  "softwareVersion": "1.0",
  "datePublished": "2024-01-01",
  "author": {
    "@type": "Organization",
    "name": "ExotIQ.ai"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ExotIQ.ai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExotIQ.ai is an AI-powered fleet management platform designed specifically for vehicle rental operations, Turo hosts, and car sharing businesses. It automates pricing, maintenance scheduling, and operational tasks to help you scale profitably."
      }
    },
    {
      "@type": "Question",
      "name": "How much does ExotIQ.ai cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExotIQ.ai offers tiered pricing starting at $49/month for up to 5 vehicles, $99/month for up to 20 vehicles, and $199/month for up to 50 vehicles. Enterprise pricing is available for larger fleets."
      }
    },
    {
      "@type": "Question",
      "name": "Which platforms does ExotIQ.ai integrate with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExotIQ.ai integrates with major car sharing platforms including Turo, Getaround, and HyreCar. We also support direct bookings through our white-labeled booking portal."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer a free beta program for early adopters. Join our beta to get priority access and help shape the platform's development."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AI pricing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI pricing engine analyzes market demand, competitor rates, seasonal patterns, and local events to automatically optimize your vehicle pricing for maximum revenue. It adjusts rates in real-time based on market conditions."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fleet Management Software",
  "description": "AI-powered fleet management platform for vehicle rental operations",
  "provider": {
    "@type": "Organization",
    "name": "ExotIQ.ai"
  },
  "serviceType": "Software as a Service",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fleet Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Pricing Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maintenance Scheduling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fleet Analytics"
        }
      }
    ]
  }
};