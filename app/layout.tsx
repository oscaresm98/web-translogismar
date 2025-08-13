import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import StructuredData from "./structured-data";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'Grupo MS - %s',
    default: 'Grupo MS - Transporte de Carga Pesada y Liviana en Ecuador'

  },
  description: 'M.S. Grupo Logístico - Empresa líder en transporte de carga pesada y liviana en Ecuador. +20 años de experiencia, entregas seguras y eficientes en toda la región.',
  keywords: ['Transporte Ecuador', 'Carga pesada Ecuador', 'Logística Ecuador', 'Transporte terrestre', 'Fletes Ecuador', 'Mudanzas industriales', 'Transporte de maquinaria', 'Grupo MS'],
  authors: [{ name: 'Grupo MS' }],
  creator: 'Grupo MS',
  publisher: 'Grupo MS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://grupomstransporte.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Grupo MS - Transporte de Carga Pesada y Liviana en Ecuador',

    description: 'Empresa líder en transporte de carga pesada y liviana en Ecuador. +20 años de experiencia.',
    url: 'https://grupomstransporte.com',
    siteName: 'Grupo MS',
    images: [
      {
        url: '/img/banner-camiones.png',
        width: 1200,
        height: 630,
        alt: 'Grupo MS - Transporte de Carga',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo MS - Transporte de Carga Pesada y Liviana en Ecuador',

    description: 'Empresa líder en transporte de carga pesada y liviana en Ecuador. +20 años de experiencia.',
    images: ['/img/banner-camiones.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} h-screen overflow-y-scroll`}>
        {children}
      </body>
    </html>
  );
}
