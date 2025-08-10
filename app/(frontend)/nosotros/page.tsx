import Link from "next/link"
import MisionVision from "@/components/nosotros/mision-vision"
import SloganNosotros from "@/components/nosotros/slogan-nosotros"
import ImageEffect from "@/components/effects/image-effect"
import EnterpriseInterface from "@/interfaces/enterpriseInterface"
import { getEnterprisesPrisma } from "@/data/prismaNosotros"


export const metadata = {
  title: 'Nosotros - MS Translogismar',
  description: 'Conoce MS Translogismar - Más de 20 años de experiencia en transporte de carga pesada en Ecuador. Historia, misión, visión y valores de nuestra empresa líder en logística.',
  keywords: ['MS Translogismar historia', 'empresa transporte Ecuador', '20 años experiencia', 'misión visión transporte', 'líderes logística Ecuador'],
  openGraph: {
    title: 'Nosotros - MS Translogismar',
    description: 'Más de 20 años de experiencia en transporte de carga pesada en Ecuador.',
    images: ['/img/banner-camiones.png'],
  },
}

export default async function Nosotros() {
  const nosotros = await getEnterprisesPrisma() as EnterpriseInterface[]
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white section-padding overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/banner-camiones.png')"
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
        {/* Additional decorative elements for enhanced elegance */}
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-accent-300/10 rounded-full blur-2xl animate-pulse-soft"></div>
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
                  <div className="text-base leading-relaxed text-neutral-700 whitespace-pre-line">
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
