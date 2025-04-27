
import Link from "next/link"
import Cliente from "@/components/admin/clientes/cliente"
import { ClientInteface } from "@/interfaces/clientInterface"
import { getClientsPrisma } from "@/data/prismaClientes"


export default async function ClientesPage() {
  const clients = await getClientsPrisma() as ClientInteface[]

  return (
    <div className="container p-2">
      <h1 className="font-bold text-4xl text-[#0230E6] block">Clientes</h1>
      <div className="flex justify-between">
        <p className="mt-3">Administra tus Clientes</p>
        {clients?.length < 11 && (
          <Link
            href="/admin/clientes/nuevo"
            className="bg-[#0230E6] max-w-40 text-center text-white font-semibold transition duration-300 p-2 hover:bg-blue-800"
          >
            Nuevo Cliente
          </Link>
        )}
      </div>

      {clients?.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Descripción</th>
              <th className='p-2'>Imagen</th>
              <th className='p-2 w-40'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients?.map(client => (
              <Cliente
                key={client.id}
                client={client}
              />
            ))
            }
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'>No Hay Clientes Aún</p>
      )
      }
    </div>

  )
}
