import Servicio from '@/components/admin/servicios/servicio'
import ServiceInterface from '@/interfaces/serviceInterface'
import Breadcrumb from '@/components/admin/breadcrumb'
import Link from 'next/link'
import { getServicesPrisma } from '@/data/prismaServicios'

export default async function ServiciosPage() {
  const services = await getServicesPrisma() as ServiceInterface[]

  return (
    <div className="container p-6">
      <Breadcrumb items={[{ label: 'Servicios' }]} />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-bold text-3xl text-secun">Servicios</h1>
          <p className="text-neutral-400 text-sm mt-1">{services.length} servicio{services.length !== 1 ? 's' : ''} registrado{services.length !== 1 ? 's' : ''}</p>
        </div>
        {services.length < 5 && (
          <Link
            href="/admin/servicios/nuevo"
            className="bg-secun text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-dark-800 transition-colors"
          >
            + Nuevo servicio
          </Link>
        )}
      </div>

      {services.length ? (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-secun text-white text-sm">
              <tr>
                <th className="p-3 text-left font-semibold">Nombre</th>
                <th className="p-3 text-left font-semibold">Ubicación</th>
                <th className="p-3 text-left font-semibold">Descripción</th>
                <th className="p-3 text-center font-semibold">Imagen</th>
                <th className="p-3 text-center font-semibold w-36">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <Servicio key={service.id} service={service} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 text-neutral-400">
          <p className="text-lg">No hay servicios aún</p>
          <Link href="/admin/servicios/nuevo" className="text-prima text-sm font-semibold hover:underline mt-2 inline-block">
            Crear el primero →
          </Link>
        </div>
      )}
    </div>
  )
}
