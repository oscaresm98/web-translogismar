'use client'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import useOneService from "@/hooks/useOneService"
import ImageEffect from "@/components/effects/image-effect"

type ServiceProps = {
  serviceSlug: string 
}

export default function Service({serviceSlug}: ServiceProps) {
  const {service, isLoading} = useOneService(serviceSlug)
  
  if(isLoading) return (
    <div className="col-span-2 flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Cargando servicio...</p>
    </div>
  )
  
  if (Object.keys(service!).length === 1) return (
    <div className="col-span-2 text-center p-8 bg-orange-100 rounded-lg">
      <p className="text-orange-600 font-bold text-3xl">Servicio no encontrado</p>
      <Link href="/servicios" className="mt-4 inline-block bg-prima text-white px-4 py-2 rounded">
        Ver todos los servicios
      </Link>
    </div>
  )
  
  if (service) return (
    <>
      <ImageEffect
        url={service.imageURL}
        alternative={`Imagen del servicio ${service.name}`}
        isPriority={true} // Esta imagen es importante para la experiencia del usuario
      />
      <div className="flex flex-col gap-4 p-2">
        <h2 className="text-center md:text-left text-4xl text-prima font-light">{service.name}</h2>
        <p className="">{service.description}</p>
        {/* <p className="text-secun font-bold text-4xl"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {service.location}</p> */}
        <Link
          href="/contacto"
          className={`bg-prima text-center transition duration-300 delay-150 hover:bg-[#9b5428] p-3 text-white font-semibold rounded-sm`}
        >Quiero el Servicio</Link>
      </div>
    </>
  )
}
