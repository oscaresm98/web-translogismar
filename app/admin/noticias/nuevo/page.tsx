import FormularioNuevo from '@/components/admin/news/formulario-nuevo'
import Breadcrumb from '@/components/admin/breadcrumb'

export default function NuevaNoticia() {
  return (
    <div className="container p-6 max-w-2xl">
      <Breadcrumb items={[{ label: 'Noticias', href: '/admin/noticias' }, { label: 'Nueva' }]} />
      <h1 className="font-bold text-3xl text-secun">Nueva Noticia</h1>
      <p className="text-neutral-400 text-sm mt-1 mb-6">Completa los campos para publicar una nueva noticia</p>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
        <FormularioNuevo />
      </div>
    </div>
  )
}
