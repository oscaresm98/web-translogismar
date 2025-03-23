import FormularioNosotros from "@/components/admin/nosotros/formulario-nosotros"
import { getEnterprise } from "@/data/nosotros"
import EnterpriseInterface from "@/interfaces/enterpriseInterface"
import { redirect } from "next/navigation"



export default async function EditarNosotros({ params }: { params: { id: number } }) {
  const enterprise = await getEnterprise(params.id) as EnterpriseInterface

  if (Object.keys(enterprise).length === 1) {
    redirect('/admin/nosotros')
  }
  return (
    <div className="container p-2">
      <h1 className="font-black text-4xl text-[#0230E6] ">Editar Nosotros</h1>
      <p className="mt-3">A continuación podrás modificar los datos de nosotros</p>
      <FormularioNosotros enterprise={enterprise} />
    </div>
  )
}
