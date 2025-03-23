import { Metadata } from "next"
import Link from "next/link"
import ServiceCard from "@/components/servicios/service-card"
import ServiceInterface from "@/interfaces/serviceInterface"
import { getDataServices } from "@/data/servicio"



export const metadata: Metadata = {
  title: 'Servicios',
  description: 'M.S. Grupo Logístico - Servicios de transporte terrestre de carga pesada por todo el pais.'
}

export default async function Sercivios() {
  const servicesData = await getDataServices() as ServiceInterface[]
  return (
    <main className="container md:px-8">
      <h1 className="text-5xl text-prima text-center font-bold my-12">Transporte de Carga Pesada</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        {
          servicesData?.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              position={i}
            />
          ))
        }
      </div>
      <div className="text-center">
        <h3 className="font-bold text-gray-400 text-3xl block my-12">Para obtener Informacion mas detallada y personalizada ponte en contacto con nosotros</h3>
        <Link href="/contacto" className="block md:inline-block bg-prima mb-12 transition duration-300 delay-150 hover:bg-[#9b5428] p-3 text-white font-semibold rounded-sm">Contáctanos</Link>
      </div>
    </main>
  )
}
