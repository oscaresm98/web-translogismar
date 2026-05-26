import Noticia from '@/components/admin/news/noticia'
import NewsInterface from '@/interfaces/newsInterface'
import Breadcrumb from '@/components/admin/breadcrumb'
import Link from 'next/link'
import { getNewsPrisma } from '@/data/prismaNoticias'

export default async function NoticiasPage() {
  const news = await getNewsPrisma() as NewsInterface[]

  return (
    <div className="container p-6">
      <Breadcrumb items={[{ label: 'Noticias' }]} />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-bold text-3xl text-secun">Noticias</h1>
          <p className="text-neutral-400 text-sm mt-1">{news.length} noticia{news.length !== 1 ? 's' : ''} registrada{news.length !== 1 ? 's' : ''}</p>
        </div>
        <Link
          href="/admin/noticias/nuevo"
          className="bg-prima text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors"
        >
          + Nueva noticia
        </Link>
      </div>

      {news.length ? (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-secun text-white text-sm">
              <tr>
                <th className="p-3 text-left font-semibold">Título</th>
                <th className="p-3 text-left font-semibold">Contenido</th>
                <th className="p-3 text-center font-semibold">Imagen</th>
                <th className="p-3 text-center font-semibold w-36">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {news.map(noticia => (
                <Noticia key={noticia.id} noticia={noticia} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 text-neutral-400">
          <p className="text-lg">No hay noticias aún</p>
          <Link href="/admin/noticias/nuevo" className="text-prima text-sm font-semibold hover:underline mt-2 inline-block">
            Crear la primera →
          </Link>
        </div>
      )}
    </div>
  )
}
