import { Metadata } from "next"
import NewsSection from "@/components/noticias/news-section"
import NewsInterface from "@/interfaces/newsInterface"
import { getNewsPrisma } from "@/data/prismaNoticias"

export const metadata: Metadata = {
  title: 'Noticias - MS Translogismar',
  description: 'MS Translogismar - Últimas noticias, novedades y tendencias del sector transporte y logística en Ecuador. Mantente informado sobre la industria.',
  keywords: ['noticias transporte Ecuador', 'novedades logística', 'sector transporte Ecuador', 'MS Translogismar noticias'],
  openGraph: {
    title: 'Noticias - MS Translogismar',
    description: 'Últimas noticias y novedades del sector transporte y logística en Ecuador.',
    images: ['/img/banner-camiones.png'],
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
