import { redirect } from 'next/navigation'
import FormularioServicios from '@/components/admin/servicios/formulario-servicios'
import Breadcrumb from '@/components/admin/breadcrumb'
import ServiceInterface from '@/interfaces/serviceInterface'

async function getDataService(id: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/servicios/${id}`, {
      method: 'GET',
      next: { tags: ['dataService'] },
    })
    if (!res.ok) throw new Error('No se pudo cargar la data')
    return await res.json()
  } catch (error: any) {
    return { error: { message: error?.message } }
  }
}

export default async function EditarServicio({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = await getDataService(id) as ServiceInterface

  if (Object.keys(service).length === 1) redirect('/admin/servicios')

  return (
    <div className="container p-6 max-w-2xl">
      <Breadcrumb items={[{ label: 'Servicios', href: '/admin/servicios' }, { label: 'Editar' }]} />
      <h1 className="font-bold text-3xl text-secun">Editar Servicio</h1>
      <p className="text-neutral-400 text-sm mt-1 mb-6">Modificá los datos del servicio</p>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
        <FormularioServicios service={service} />
      </div>
    </div>
  )
}
