import Link from "next/link"
import MisionVision from "@/components/nosotros/mision-vision"
import SloganNosotros from "@/components/nosotros/slogan-nosotros"
import ImageEffect from "@/components/effects/image-effect"
import EnterpriseInterface from "@/interfaces/enterpriseInterface"
import { getEnterprisesPrisma } from "@/data/prismaNosotros"


export const metadata = {
  title: 'Nosotros',
  description: 'Sobre nosotros, M.s. Grupo Logístico. Empresa de transporte terrestre',
}

export default async function Nosotros() {
  const nosotros = await getEnterprisesPrisma() as EnterpriseInterface[]
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="text-accent-400 font-semibold text-lg tracking-wide uppercase">
                Conoce Nuestra Historia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Más de <span className="text-gradient">20 Años</span> de Experiencia
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Desde nuestros inicios, hemos construido una reputación sólida basada en 
              la confianza, la eficiencia y el compromiso con nuestros clientes
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">+20</div>
                <div className="text-neutral-300">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">+500</div>
                <div className="text-neutral-300">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">24/7</div>
                <div className="text-neutral-300">Servicio Disponible</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl animate-pulse-soft"></div>
      </section>

      {/* About Section - Balanced Layout */}
      <main className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="text-accent-500 font-semibold text-lg tracking-wide uppercase">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 leading-tight">
                Construyendo el Futuro del <span className="text-gradient">Transporte</span>
              </h2>
            </div>

            {/* Balanced Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Content Column */}
              <div className="space-y-6">
                {/* Main Story */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-lg leading-relaxed text-neutral-700 whitespace-pre-line">
                    {nosotros[0].descHistory}
                  </div>
                </div>
              </div>

              {/* Image Column - Proportional */}
              <div className="space-y-6">
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-strong">
                  <ImageEffect
                    url={nosotros[0].ImageURL}
                    alternative='imagen de Nosotros'
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-500 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-dark-600 rounded-lg opacity-40"></div>
                </div>


                {/* CTA */}
                <div>
                  <Link href="/servicios" className="btn-primary inline-flex items-center gap-2">
                    <span>Conocer Servicios</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MisionVision enterprise={nosotros[0]} />

      <SloganNosotros />
    </>
  )
}
