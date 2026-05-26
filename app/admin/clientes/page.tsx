import Link from 'next/link'
import Cliente from '@/components/admin/clientes/cliente'
import Breadcrumb from '@/components/admin/breadcrumb'
import { ClientInteface } from '@/interfaces/clientInterface'
import { getClientsPrisma } from '@/data/prismaClientes'

export default async function ClientesPage() {
  const clients = await getClientsPrisma() as ClientInteface[]

  return (
    <div className="container p-6">
      <Breadcrumb items={[{ label: 'Clientes' }]} />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-bold text-3xl text-secun">Clientes</h1>
          <p className="text-neutral-400 text-sm mt-1">{clients.length} cliente{clients.length !== 1 ? 's' : ''} registrado{clients.length !== 1 ? 's' : ''}</p>
        </div>
        {clients.length < 11 && (
          <Link
            href="/admin/clientes/nuevo"
            className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            + Nuevo cliente
          </Link>
        )}
      </div>

      {clients.length ? (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-secun text-white text-sm">
              <tr>
                <th className="p-3 text-left font-semibold">Nombre</th>
                <th className="p-3 text-left font-semibold">Descripción</th>
                <th className="p-3 text-center font-semibold">Imagen</th>
                <th className="p-3 text-center font-semibold w-36">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <Cliente key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 text-neutral-400">
          <p className="text-lg">No hay clientes aún</p>
          <Link href="/admin/clientes/nuevo" className="text-prima text-sm font-semibold hover:underline mt-2 inline-block">
            Crear el primero →
          </Link>
        </div>
      )}
    </div>
  )
}
