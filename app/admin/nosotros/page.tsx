import Image from "next/image"
import Link from "next/link"
import EnterpriseInterface from "@/interfaces/enterpriseInterface"
import { getEnterprises } from "@/data/nosotros"

export default async function NosotrosAdminPage() {
  const dataEnterprise = await getEnterprises() as EnterpriseInterface[]
  const enterprise = dataEnterprise.pop() as EnterpriseInterface

  return (
    <div className="container p-2">
      <h1 className="font-bold text-4xl text-[#0230E6] block">Nosotros</h1>
      <p className="mt-3">Administra la sección de nosotros</p>

      <div className="grid md:grid-cols-[1fr_2fr] place-items-center gap-2 my-2">
        <Image
          src={enterprise?.ImageURL}
          alt="Imagen de Nosotros"
          width={300}
          height={300}
          priority
        />
        <div >
          <p className="font-bold text-xl text-orange-500 block">Historia de la empresa</p>
          <p className="text-sm line-clamp-2 text-ellipsis">{enterprise?.descHistory}</p>
          <p className="font-bold text-xl text-orange-500 block">Dirección</p>
          <p className="text-sm line-clamp-2 text-ellipsis">{enterprise?.address}</p>
          <p className="font-bold text-xl text-orange-500 block">Télefono celular</p>
          <p className="text-sm line-clamp-2 text-ellipsis mb-2">{enterprise?.cellphone}</p>
          <Link
            href={`/admin/nosotros/${enterprise?.id}/editar`}
            className="block bg-prima text-center transition duration-300 hover:bg-[#9b5428] p-2 text-white font-semibold rounded-sm"
          >
            Editar
          </Link>
        </div>
      </div>
    </div>
  )
}
