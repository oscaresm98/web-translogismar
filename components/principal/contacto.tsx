'use client';
import useIntersection from "@/hooks/useIntersection";
import Link from "next/link";

export default function Contacto() {
  const [contRef, readyCont] = useIntersection({thressold: 0.5})
  return (
    <section className='relative section-padding overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700'>
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/img/camion.jpg')"
        }}
      ></div>
      
      {/* Decorative Elements */}
      {/* <div className="absolute top-20 right-10 w-24 h-24 bg-accent-500/20 rounded-full blur-xl animate-bounce-subtle"></div> */}
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl animate-pulse-soft"></div>
      
      <div ref={contRef} className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Heading */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-300 ${readyCont ? 'translate-x-0 opacity-100' : 'translate-x-[-2rem] opacity-0'}`}>
            Encuentra el <span className="text-gradient">Mejor Servicio</span> del Mercado
          </h2>
          
          {/* Description */}
          <p className={`text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${readyCont ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            Llena el formulario de contacto y un asesor especializado se pondrá en contacto contigo en menos de 2 horas
          </p>

          {/* Features */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-700 ${readyCont ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center justify-center gap-3 text-neutral-300">
              <div className="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">Respuesta Rápida</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-neutral-300">
              <div className="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-medium">Disponible 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-neutral-300">
              <div className="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-medium">Asesoría Gratuita</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`pt-8 transition-all duration-700 delay-900 ${readyCont ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Link 
              href="/contacto" 
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 group"
            >
              <span>Contáctanos Ahora</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
