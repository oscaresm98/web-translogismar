import Servicio from "@/components/admin/servicios/servicio"
import ServiceInterface from "@/interfaces/serviceInterface"
import Link from "next/link"
import { getServicesPrisma } from "@/data/prismaServicios"


export default async function ServiciosPage() {
  const services = await getServicesPrisma() as ServiceInterface[]

  return (
    <div className="container p-2">
      <h1 className="font-bold text-4xl text-[#0230E6] block">Servicios</h1>
      <div className="flex justify-between">
        <p className="mt-3">Administra tus servicios</p>
        {services?.length < 5 && (
          <Link
            href="/admin/servicios/nuevo"
            className="bg-[#0230E6] max-w-40 text-center text-white font-semibold transition duration-300 p-2 hover:bg-blue-800"
          >
            Nuevo servicio
          </Link>
        )}
      </div>
      {services?.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Ubicación</th>
              <th className='p-2'>Descripción</th>
              <th className='p-2'>Imagen</th>
              <th className='p-2 w-40'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {services?.map(service => (
              <Servicio
                key={service.id}
                service={service}
              />
            ))
            }
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'>No Hay Servicos Aún</p>
      )
      }
    </div>
    // <FormularioServicios />
  )
}

