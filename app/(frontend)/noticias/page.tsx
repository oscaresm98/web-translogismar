import { Metadata } from "next"
import NewsSection from "@/components/noticias/news-section"
import NewsInterface from "@/interfaces/newsInterface"
import { getNewsPrisma } from "@/data/prismaNoticias"

// Definir opciones de revalidación para ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidar cada hora

export const metadata: Metadata = {
  title: 'Noticias | M.S. Grupo Logístico',
  description: 'Últimas noticias y actualizaciones sobre servicios de transporte, logística y mudanzas. Mantente informado con M.S. Grupo Logístico.',
  keywords: ['noticias transporte', 'actualizaciones logística', 'M.S. Grupo Logístico', 'sector transporte', 'logística Ecuador'],
  alternates: {
    canonical: 'https://grupomstransporte.com/noticias',
  },
  openGraph: {
    title: 'Noticias y Actualizaciones | M.S. Grupo Logístico',
    description: 'Mantente al día con las últimas novedades del sector de transporte, logística y mudanzas con M.S. Grupo Logístico.',
    url: 'https://grupomstransporte.com/noticias',
    siteName: 'M.S. Grupo Logístico',
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noticias | M.S. Grupo Logístico',
    description: 'Últimas noticias y actualizaciones sobre servicios de transporte, logística y mudanzas.',
  },
}

export default async function NoticiasPage() {
  const newsData = await getNewsPrisma() as NewsInterface[]

  return (
    <main className="container md:px-8">
      <h1 className="text-5xl text-prima text-center font-bold my-12">Últimas Noticias</h1>
      <NewsSection news={newsData} />
    </main>
  )
}
