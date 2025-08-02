import Link from "next/link"
import Image from "next/image"
import ServiceInterface from "@/interfaces/serviceInterface"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function ServiceCard({ service, position }: { service: ServiceInterface, position: number }) {
  return (
    <div className="group card card-hover overflow-hidden bg-white relative">
      <div className="relative overflow-hidden">
        <Image
          src={service.imageURL}
          alt={`imagen de ${service.name}`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Location Badge */}
        <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full">
          <div className="flex items-center gap-2 text-white text-sm font-medium">
            <FontAwesomeIcon icon={faLocationDot} className="text-accent-400" />
            <span>{service.location}</span>
          </div>
        </div>
        
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-dark-800 group-hover:text-accent-600 transition-colors duration-300">
            {service.name}
          </h2>
          <p className="text-neutral-600 leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Disponible</span>
          </div>
          
          <Link
            href={`servicios/${service.slug}`}
            className="btn-primary text-sm px-4 py-2 group-hover:shadow-glow"
          >
            Ver Details
          </Link>
        </div>
      </div>
      
    </div>
  )
}
