'use client'

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MS Translogismar",
    "alternateName": "M.S. Grupo Logístico",
    "url": "https://grupomstransporte.com",
    "logo": "https://grupomstransporte.com/img/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+593-95-898-9766",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prosperina km 6.5 vía Daule",
      "addressLocality": "Guayaquil",
      "addressRegion": "Guayas",
      "addressCountry": "EC"
    },
    "sameAs": [
      "https://grupomstransporte.com"
    ],
    "description": "Empresa líder en transporte de carga pesada y liviana en Ecuador con más de 20 años de experiencia.",
    "foundingDate": "2003",
    "areaServed": {
      "@type": "Country",
      "name": "Ecuador"
    },
    "serviceType": [
      "Transporte de carga pesada",
      "Transporte de carga liviana", 
      "Logística",
      "Mudanzas industriales",
      "Transporte de maquinaria"
    ]
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MS Translogismar",
    "image": "https://grupomstransporte.com/img/banner-camiones.png",
    "telephone": "+593-95-898-9766",
    "email": "info@grupomstransporte.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prosperina km 6.5 vía Daule",
      "addressLocality": "Guayaquil",
      "addressRegion": "Guayas",
      "postalCode": "090150",
      "addressCountry": "EC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -2.1894,
      "longitude": -79.8890
    },
    "url": "https://grupomstransporte.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Ecuador"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MS Translogismar",
    "url": "https://grupomstransporte.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://grupomstransporte.com/servicios?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  )
}