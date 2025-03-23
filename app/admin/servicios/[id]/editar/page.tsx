import { redirect } from "next/navigation";
import FormularioServicios from "@/components/admin/servicios/formulario-servicios"
import ServiceInterface from "@/interfaces/serviceInterface"

async function getDataService(id: string) {
  try {
      const res = await fetch(`${process.env.API_URL}/servicios/${id}`, {
          method: "GET",
          next: { tags: ['dataService'] }
      })
      if (!res.ok) {
          throw new Error('No se pudo cargar la data')
      }
      const data = await res.json()
      return data
  } catch (error: any) {
      return { error: { message: error?.message } };
  }
}

export default async function EditarServicio({ params }: { params: { id: string } }) {
  const service = await getDataService(params.id) as ServiceInterface

  if (Object.keys(service).length === 1) {
    redirect('/admin/servicios')
  }
  return (
    <div className="container">
      <h1 className="font-black text-4xl text-[#0230E6] ">Editar Servicio</h1>
      <p className="mt-3">A continuación podrás modificar los datos de un servicio</p>
      <FormularioServicios
        service={service}
      />
    </div>
  )
}
