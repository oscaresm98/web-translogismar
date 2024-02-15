import Link from "next/link"          
import Image from "next/image"
import ServiceInterface from "@/interfaces/serviceInterface"
import imagenPrueba from "@/public/img/camion.jpg"

export default function ServiceCard({service, position}: {service: ServiceInterface, position:number}) {
  return (
    <div className={`bg-gray-100 border scale-100 hover:scale-105 ease-in duration-300 border-gray-200`}>
    {/* <div className={`bg-gray-100 border scale-100 hover:scale-105 ease-in duration-300 border-gray-200 ${position === 3 && "md:col-span-3 md:w-1/3 md:mx-auto"}`}> */}
      <Image
        src={imagenPrueba}
        alt={`imagen de ${service.name}`}
        loading="lazy"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-4xl text-[#0059aa] text-center font-light">{service.name}</h2>
        <p className="line-clamp-2 md:line-clamp-3 text-ellipsis">{service.description}</p>
        <p className="text-[#0059aa] font-bold text-3xl">${service.price}</p>
        <Link 
          href={"servicios/guitarra"}
          className="w-full bg-[#ff6a0f] transition duration-300 hover:bg-[#9b5428] text-white font-bold text-center p-3 my-2"
        >Más Información</Link>
      </div>
    </div>
  )
}
