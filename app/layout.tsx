import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'MS - %s',
    default: 'MS - Inicio'
  },
  description: 'M.S. Grupo Logístico: Transporte de carga pesada y liviana, logística nacional e internacional, atención personalizada y soluciones a medida. Cotiza tu envío con la empresa líder en Ecuador.',
  keywords: [
    'Transporte',
    'Transporte de carga pesada',
    'Transporte de carga liviana',
    'Transporte terrestre',
    'Logística',
    'Servicios logísticos',
    'Noticias de transporte',
    'Nosotros',
    'Contacto',
    'Cotización',
    'Ecuador',
    'Carga',
    'MS Grupo Logístico'
  ],
  authors: [{ name: 'M.S. Grupo Logístico', url: 'https://grupomstransporte.com' }],
  creator: 'M.S. Grupo Logístico',
  robots: 'index, follow',
  openGraph: {
    title: 'M.S. Grupo Logístico',
    description: 'Transporte de carga pesada y liviana, logística nacional e internacional, atención personalizada y soluciones a medida.',
    url: 'https://grupomstransporte.com',
    siteName: 'M.S. Grupo Logístico',
    images: [
      {
        url: 'https://grupomstransporte.com/img/camion.jpg',
        width: 1200,
        height: 630,
        alt: 'Camión de M.S. Grupo Logístico',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.S. Grupo Logístico',
    description: 'Transporte de carga pesada y liviana, logística nacional e internacional, atención personalizada y soluciones a medida.',
    site: '@msgrupologistico',
    images: ['https://grupomstransporte.com/img/camion.jpg'],
  },
  alternates: {
    canonical: 'https://grupomstransporte.com',
  },
  metadataBase: new URL('https://grupomstransporte.com'),
  other: {
    'application-name': 'M.S. Grupo Logístico',
    'msapplication-TileColor': '#0230E6',
    'theme-color': '#0230E6',
    // Structured data for sitelinks searchbox and navigation
    'json-ld': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'url': 'https://grupomstransporte.com',
      'name': 'M.S. Grupo Logístico',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://grupomstransporte.com/buscar?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      },
      'sameAs': [
        'https://grupomstransporte.com',
        'https://grupomstransporte.com/servicios',
        'https://grupomstransporte.com/noticias',
        'https://grupomstransporte.com/nosotros',
        'https://grupomstransporte.com/contacto'
      ],
      'mainEntity': [
        {
          '@type': 'WebPage',
          '@id': 'https://grupomstransporte.com',
          'name': 'Inicio',
          'url': 'https://grupomstransporte.com'
        },
        {
          '@type': 'WebPage',
          '@id': 'https://grupomstransporte.com/servicios',
          'name': 'Servicios',
          'url': 'https://grupomstransporte.com/servicios'
        },
        {
          '@type': 'WebPage',
          '@id': 'https://grupomstransporte.com/noticias',
          'name': 'Noticias',
          'url': 'https://grupomstransporte.com/noticias'
        },
        {
          '@type': 'WebPage',
          '@id': 'https://grupomstransporte.com/nosotros',
          'name': 'Nosotros',
          'url': 'https://grupomstransporte.com/nosotros'
        },
        {
          '@type': 'WebPage',
          '@id': 'https://grupomstransporte.com/contacto',
          'name': 'Contacto',
          'url': 'https://grupomstransporte.com/contacto'
        }
      ]
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data para sitelinks y navegación
  const jsonLd = metadata.other && metadata.other['json-ld'] ? metadata.other['json-ld'] : '';
  return (
    <html lang="es">
      <head>
        {/* Structured data for sitelinks and navigation */}
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
          />
        )}
      </head>
      <body className={`${inter.className} h-screen overflow-y-scroll`}>
        {children}
      </body>
    </html>
  );
}
