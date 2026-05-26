import FormularioNuevo from '@/components/admin/servicios/formulario-nuevo'
import Breadcrumb from '@/components/admin/breadcrumb'

export default function NuevoServicio() {
  return (
    <div className="container p-6 max-w-2xl">
      <Breadcrumb items={[{ label: 'Servicios', href: '/admin/servicios' }, { label: 'Nuevo' }]} />
      <h1 className="font-bold text-3xl text-secun">Nuevo Servicio</h1>
      <p className="text-neutral-400 text-sm mt-1 mb-6">Completa los campos para crear un nuevo servicio</p>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
        <FormularioNuevo />
      </div>
    </div>
  )
}
