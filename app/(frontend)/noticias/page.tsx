import { Metadata } from "next"
import Link from "next/link"
import NewsSection from "@/components/noticias/news-section"
import NewsInterface from "@/interfaces/newsInterface"
import { getDataNews } from "@/data/noticias"

export const metadata: Metadata = {
  title: 'Noticias',
  description: 'M.S. Grupo Logístico - Últimas noticias y novedades del sector transporte.'
}

export default async function NoticiasPage() {
  const newsData = await getDataNews() as NewsInterface[]

  return (
    <main className="container md:px-8">
      <h1 className="text-5xl text-prima text-center font-bold my-12">Últimas Noticias</h1>
      <NewsSection news={newsData} />
    </main>
  )
}
