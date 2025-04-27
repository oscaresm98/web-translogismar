import Link from "next/link"
import Image from "next/image"
import ServiceInterface from "@/interfaces/serviceInterface"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function ServiceCard({ service, position }: { service: ServiceInterface, position: number }) {
  return (
    <div className={`bg-gray-100 border scale-100 hover:scale-105 ease-in duration-300 border-gray-200`}>
      {/* <div className={`bg-gray-100 border scale-100 hover:scale-105 ease-in duration-300 border-gray-200 ${position === 3 && "md:col-span-3 md:w-1/3 md:mx-auto"}`}> */}
      <Image
        src={service.imageURL}
        alt={`imagen de ${service.name}`}
        className="max-h-[365px] object-cover"
        loading="lazy"
        width={600}
        height={600}
        quality={80}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjY2NjIi8+PC9zdmc+"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-4xl text-secun text-center font-light">{service.name}</h2>
        <p className="line-clamp-2 md:line-clamp-3 text-ellipsis">{service.description}</p>
        {/* <p className="text-secun font-bold text-3xl"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {service.location}</p> */}
        <Link
          href={`servicios/${service.slug}`}
          className="w-full bg-prima transition duration-300 hover:bg-[#9b5428] text-white font-bold text-center p-3 my-2"
        >Más Información</Link>
      </div>
    </div>
  )
}
