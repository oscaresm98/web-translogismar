import EditClientForm from "@/components/admin/clientes/editClientForm";
import { ClientFormType } from "@/interfaces/clientInterface";
import { redirect } from "next/navigation";

async function getDataCliente(id: number) {
  try {
    const res = await fetch(`${process.env.API_URL}/clientes/${id}`, {
      method: "GET",
      next: { tags: ['dataClient'] }
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

export default async function EditClientPage({ params }: { params: { id: number } }) {
  const client = await getDataCliente(params.id) as ClientFormType

  if (Object.keys(client).length === 1) {
    redirect('/admin/clientes')
  }

  return (
    <div className="container p-2">
      <h1 className="font-black text-4xl text-[#0230E6] ">Editar Cliente</h1>
      <p className="mt-3">A continuación podrás modificar los datos del cliente</p>
      <EditClientForm client={client} idClient={params.id} />
    </div>
  )
}
