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
  const {service , isLoading} = useOneService(serviceSlug)
  
  if(isLoading) return <p>Cargando..</p>
  if (Object.keys(service!).length === 1) return <p className="text-center text-orange-600 font-bold text-3xl col-span-2">Servicio no encontrado</p>
  if (service) return (
    <>
      <ImageEffect
                url={service.imageURL}
                alternative="imagen Servicio"
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
