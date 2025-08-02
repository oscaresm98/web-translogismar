'use client'
import useIntersection from "@/hooks/useIntersection"
import Link from "next/link"
import { useState } from "react"

export default function Spots() {
  const [segRef, readySeg] = useIntersection({ threshold: 0.3 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const valueProps = [
    {
      id: 1,
      title: "Seguridad",
      description: "Protegemos tu carga con el más alto nivel de seguridad y seguimiento continuo durante todo el transporte. Nuestro equipo especializado garantiza que tu mercancía llegue en perfectas condiciones.",
      icon: (
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Base circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full group-hover:scale-110 transition-all duration-500 shadow-glow"></div>
          
          {/* Ripple waves */}
          <div className="absolute inset-0 rounded-full border border-accent-400 opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-opacity duration-300" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-2 rounded-full border border-accent-300 opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
          
          {/* Security sparkles */}
          <div className="absolute top-1 right-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-2 right-1 w-1.5 h-1.5 bg-accent-200 rounded-full opacity-0 group-hover:opacity-90 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/3 left-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Breathing effect */}
          <div className="absolute inset-1 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-opacity duration-300"></div>
          
          {/* Main icon container */}
          <div className="relative w-full h-full bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center group-hover:-rotate-12 transition-all duration-500">
            <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-all duration-500"></div>
        </div>
      )
    },
    {
      id: 2,
      title: "Precio",
      description: "Ofrecemos tarifas competitivas y transparentes sin comprometer la calidad del servicio. Contamos con planes flexibles que se adaptan a las necesidades específicas de tu empresa.",
      icon: (
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Base circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-600 to-dark-700 rounded-full group-hover:scale-110 transition-all duration-500 shadow-glow"></div>
          
          {/* Ripple waves */}
          <div className="absolute inset-0 rounded-full border border-dark-400 opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-opacity duration-300" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-2 rounded-full border border-dark-300 opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
          
          {/* Money sparkles */}
          <div className="absolute top-1 right-4 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-2 right-1 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-90 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/3 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Breathing effect */}
          <div className="absolute inset-1 bg-gradient-to-br from-dark-500 to-dark-600 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-opacity duration-300"></div>
          
          {/* Main icon container */}
          <div className="relative w-full h-full bg-gradient-to-br from-dark-600 to-dark-700 rounded-full flex items-center justify-center group-hover:-rotate-12 transition-all duration-500">
            <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-dark-700 via-dark-600 to-dark-500 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-all duration-500"></div>
        </div>
      )
    },
    {
      id: 3,
      title: "Tiempo",
      description: "Cumplimos con los plazos establecidos gracias a nuestra experiencia y planificación logística avanzada. Tu tiempo es valioso y respetamos cada compromiso de entrega.",
      icon: (
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Base circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full group-hover:scale-110 transition-all duration-500 shadow-glow"></div>
          
          {/* Ripple waves */}
          <div className="absolute inset-0 rounded-full border border-accent-400 opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-opacity duration-300" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-2 rounded-full border border-accent-300 opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
          
          {/* Time sparkles */}
          <div className="absolute top-1 right-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-2 right-1 w-1.5 h-1.5 bg-accent-200 rounded-full opacity-0 group-hover:opacity-90 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/3 left-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Breathing effect */}
          <div className="absolute inset-1 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-opacity duration-300"></div>
          
          {/* Main icon container */}
          <div className="relative w-full h-full bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center group-hover:-rotate-12 transition-all duration-500">
            <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-all duration-500"></div>
        </div>
      )
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {valueProps.map((prop, index) => (
        <div
          key={prop.id}
          ref={index === 0 ? segRef : undefined}
          className={`group card card-hover p-8 text-center relative overflow-hidden bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 transition-all duration-700 ${
            readySeg ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ 
            transitionDelay: `${index * 150}ms`,
            transform: hoveredCard === prop.id ? 'translateY(-8px) scale(1.02)' : undefined
          }}
          onMouseEnter={() => setHoveredCard(prop.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            {prop.icon}
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-accent-600 mb-6 uppercase tracking-wide group-hover:text-accent-700 transition-colors duration-300">
              {prop.title}
            </h3>
            
            {/* Description */}
            <p className="text-neutral-600 leading-relaxed text-base">
              {prop.description}
            </p>
          </div>
          
        </div>
      ))}
    </div>
  )
}
