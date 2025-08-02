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
  
  if(isLoading) return (
    <div className="col-span-2 space-y-6 animate-pulse">
      <div className="h-96 bg-neutral-200 rounded-xl"></div>
      <div className="space-y-4">
        <div className="h-8 bg-neutral-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-neutral-200 rounded"></div>
          <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
          <div className="h-4 bg-neutral-200 rounded w-4/6"></div>
        </div>
        <div className="h-12 bg-neutral-200 rounded w-1/3"></div>
      </div>
    </div>
  )
  
  if (Object.keys(service!).length === 1) return (
    <div className="col-span-2 text-center py-16">
      <div className="max-w-md mx-auto space-y-4">
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dark-800">Servicio no encontrado</h3>
        <p className="text-neutral-600">El servicio que buscas no existe o ha sido removido.</p>
        <Link href="/servicios" className="btn-primary inline-block">
          Ver Todos los Servicios
        </Link>
      </div>
    </div>
  )
  
  if (service) return (
    <>
      {/* Service Image */}
      <div className="relative overflow-hidden rounded-2xl shadow-strong">
        <ImageEffect
          url={service.imageURL}
          alternative="imagen Servicio"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/40 to-transparent"></div>
        
        {/* Location Badge */}
        <div className="absolute bottom-4 right-4 glass-effect px-4 py-2 rounded-full">
          <div className="flex items-center gap-2 text-white font-medium">
            <FontAwesomeIcon icon={faLocationDot} className="text-accent-400" />
            <span>{service.location}</span>
          </div>
        </div>
      </div>
      
      {/* Service Details */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide">
              Servicio Especializado
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-800 mt-2">
              {service.name}
            </h1>
          </div>
          
          <div className="prose prose-lg text-neutral-700 leading-relaxed">
            <p>{service.description}</p>
          </div>
        </div>
        
        {/* Service Features */}
        <div className="card p-6 space-y-4">
          <h3 className="text-xl font-bold text-dark-800 mb-4">
            Características del Servicio
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span className="text-neutral-700">Servicio 24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span className="text-neutral-700">Seguimiento en tiempo real</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span className="text-neutral-700">Seguro incluido</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span className="text-neutral-700">Personal especializado</span>
            </div>
          </div>
        </div>
        
        {/* Service Phrase */}
        <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-6 rounded-xl border-l-4 border-accent-500">
          <p className="text-accent-800 font-medium italic text-lg">
            &ldquo;{service.phrase}&rdquo;
          </p>
        </div>
        
        {/* CTA Section */}
        <div className="space-y-4 pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="btn-primary flex-1 text-center"
            >
              Solicitar Servicio
            </Link>
            <Link
              href="/servicios"
              className="btn-outline flex-1 text-center"
            >
              Ver Otros Servicios
            </Link>
          </div>
          
          <div className="text-center text-sm text-neutral-500">
            <p>¿Tienes preguntas? <Link href="/contacto" className="text-accent-500 hover:text-accent-600 font-medium">Contáctanos</Link> para más información</p>
          </div>
        </div>
      </div>
    </>
  )
}
