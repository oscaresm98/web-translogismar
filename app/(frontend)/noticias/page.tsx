import { Metadata } from "next"
import NewsSection from "@/components/noticias/news-section"
import NewsInterface from "@/interfaces/newsInterface"
import { getNewsPrisma } from "@/data/prismaNoticias"

export const metadata: Metadata = {
  title: 'Noticias',
  description: 'M.S. Grupo Logístico - Últimas noticias y novedades del sector transporte.'
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
