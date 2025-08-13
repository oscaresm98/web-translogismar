import { Metadata } from "next"
import Link from "next/link"
import ServiceCard from "@/components/servicios/service-card"
import ServiceInterface from "@/interfaces/serviceInterface"
import { getServicesPrisma } from "@/data/prismaServicios"
import FadeIn from "@/components/transitions/fade-in"
import StaggerContainer, { StaggerItem } from "@/components/transitions/stagger-container"



export const metadata: Metadata = {
  title: 'Servicios de Transporte - Grupo MS',
  description: 'Grupo MS - Servicios especializados de transporte de carga pesada y liviana en Ecuador. Logística integral, mudanzas industriales y transporte de maquinaria.',
  keywords: ['servicios transporte Ecuador', 'carga pesada Ecuador', 'logística integral', 'mudanzas industriales Ecuador', 'transporte maquinaria'],
  openGraph: {
    title: 'Servicios de Transporte - Grupo MS',
    description: 'Servicios especializados de transporte de carga pesada y liviana en Ecuador.',
    images: ['/img/camion.jpg'],
  },
}

export default async function Sercivios() {
  const servicesData = await getServicesPrisma() as ServiceInterface[]
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white section-padding overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/camion.jpg')"
          }}
        ></div>
        {/* Professional Dark Overlay - Multi-layer for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/45 to-slate-700/65"></div>
        {/* Subtle bottom-up gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/75 via-transparent to-transparent"></div>
        {/* Refined accent overlay - more professional */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/8 via-accent-500/12 to-transparent"></div>
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-dark-900/30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <FadeIn delay={0.2}>
              <div className="inline-block">
                <span className="text-accent-400 font-semibold text-lg tracking-wide uppercase">
                  Nuestros Servicios
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transporte de <span className="text-gradient">Carga Pesada</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Soluciones integrales de logística y transporte con la experiencia y confiabilidad que tu empresa necesita
              </p>
            </FadeIn>
            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="#servicios" className="btn-primary">
                  Ver Servicios
                </Link>
                <Link href="/contacto" className="btn-outline border-white text-white hover:bg-white hover:text-dark-800">
                  Solicitar Cotización
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-accent-500/30 rounded-full blur-xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl animate-pulse-soft"></div>
        {/* Additional decorative elements for enhanced elegance */}
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-accent-300/10 rounded-full blur-2xl animate-pulse-soft"></div>
      </section>

      {/* Services Grid */}
      <main id="servicios" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <FadeIn delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
                Nuestros Servicios Especializados
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Cada servicio está diseñado para satisfacer las necesidades específicas de tu industria
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {
              servicesData?.map((service, i) => (
                <StaggerItem key={service.id}>
                  <ServiceCard
                    service={service}
                    position={i}
                  />
                </StaggerItem>
              ))
            }
          </StaggerContainer>
        </div>
      </main>

      {/* CTA Section */}
      <section className="section-padding bg-dark-800 text-white">
        <div className="container-custom">
          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold">
                ¿Necesitas un Servicio <span className="text-gradient">Personalizado</span>?
              </h3>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Nuestro equipo de expertos está listo para crear una solución logística 
                que se adapte perfectamente a las necesidades de tu empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contacto" className="btn-primary">
                  Contactar Especialista
                </Link>
                <Link href="/nosotros" className="btn-outline border-white text-white hover:bg-white hover:text-dark-800">
                  Conocer Más
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
