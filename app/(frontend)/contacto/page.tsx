import { Metadata } from 'next'
import ContactForm from '@/components/contacto/contact-form'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos a toda hora, M.S. Grupo Logístico. Empresa de transporte terrestre',
}

export default function Contacto() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="text-accent-400 font-semibold text-lg tracking-wide uppercase">
                Estamos Aquí Para Ayudarte
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Contáctanos</span> Hoy
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo está disponible 24/7 para brindarte el mejor servicio. 
              Respuesta garantizada en menos de 2 horas.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">24/7</div>
                <div className="text-neutral-300">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">&lt;2h</div>
                <div className="text-neutral-300">Tiempo de Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">+500</div>
                <div className="text-neutral-300">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl animate-pulse-soft"></div>
      </section>

      {/* Contact Section */}
      <main className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-800">
                    Envíanos un <span className="text-gradient">Mensaje</span>
                  </h2>
                  <p className="text-lg text-neutral-600">
                    Completa el formulario y nos pondremos en contacto contigo a la brevedad
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-800">
                    Información de <span className="text-gradient">Contacto</span>
                  </h2>
                  <p className="text-lg text-neutral-600">
                    Múltiples formas de ponerte en contacto con nosotros
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <a href="tel:+573001234567" className="card p-6 block group hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-800 mb-1">Teléfono</h3>
                        <p className="text-accent-600 font-semibold">0958989766</p>
                        <p className="text-sm text-neutral-600">Disponible en horario laboral</p>
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@translogismar.com" className="card p-6 block group hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-dark-600 to-dark-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-800 mb-1">Email</h3>
                        <p className="text-dark-600 font-semibold">info@translogismar.com</p>
                        <p className="text-sm text-neutral-600">Respuesta en &lt;2 horas</p>
                      </div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="card p-6 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-800 mb-1">Ubicación</h3>
                        <p className="text-dark-600 font-semibold">Prosperina km 6.5 vía Daule</p>
                        <p className="text-sm text-neutral-600">Guayaquil, Ecuador</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-dark-600 to-dark-700 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-800 mb-2">Horarios de Atención</h3>
                        <div className="space-y-1 text-sm">
                          <p className="text-dark-600"><strong>Lun - Vie:</strong> 8:00 AM - 6:00 PM</p>
                          <p className="text-dark-600"><strong>Sábados:</strong> 8:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
