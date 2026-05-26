import { redirect } from 'next/navigation'
import FormularioNoticioEditar from '@/components/admin/news/formulario-noticia'
import Breadcrumb from '@/components/admin/breadcrumb'
import NewsInterface from '@/interfaces/newsInterface'

async function getDataNews(id: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/noticias/${id}`, {
      method: 'GET',
      next: { tags: ['dataNew'] },
    })
    if (!res.ok) throw new Error('No se pudo cargar la data')
    return await res.json()
  } catch (error: any) {
    return { error: { message: error?.message } }
  }
}

export default async function EditarNoticia({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const noticia = await getDataNews(id) as NewsInterface

  if ('error' in noticia) redirect('/admin/noticias')

  return (
    <div className="container p-6 max-w-2xl">
      <Breadcrumb items={[{ label: 'Noticias', href: '/admin/noticias' }, { label: 'Editar' }]} />
      <h1 className="font-bold text-3xl text-secun">Editar Noticia</h1>
      <p className="text-neutral-400 text-sm mt-1 mb-6">Modificá los datos de la noticia</p>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
        <FormularioNoticioEditar noticia={noticia} />
      </div>
    </div>
  )
}
