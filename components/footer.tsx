'use client'
import Image from "next/image"
import Link from "next/link"
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram, faSquareYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMapLocation, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useService from "@/hooks/useService"
import logo from "../public/img/logoMundo.svg"
import useEnterprise from "@/hooks/useEnterprise"
import useSocialMedia from "@/hooks/useSocialMedia"


const Footer = () => {
  const { services, isLoading: isLoadingServices } = useService()
  const { enterprise, isLoading: isLoadingEnterprise } = useEnterprise()
  const { sociales, isLoading: isLoadingSocial } = useSocialMedia()

  const redes = { facebook: '', xtwitter: '', instagram: '', linkedin: '', youtube: '', email: '' }

  sociales?.forEach((red) => {
    switch (red.name) {
      case 'facebook':
        redes.facebook = red.link
        break;
      case 'xtwitter':
        redes.xtwitter = red.link
        break;
      case 'instagram':
        redes.instagram = red.link
        break;
      case 'linkedin':
        redes.linkedin = red.link
        break;
      case 'youtube':
        redes.youtube = red.link
        break;
      case 'email':
        redes.email = red.link
        break;
      default:
        break;
    }
  })

  return (
    <footer className="section-padding bg-dark-800 text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="hover:scale-105 transition-transform duration-300">
                <Image
                  className="drop-shadow-lg"
                  src={logo}
                  alt='imagen de logo mundo'
                  priority
                  width={80}
                />
              </Link>
              <div>
                <h3 className="font-bold text-xl text-white">M.S.</h3>
                <p className="text-accent-400 font-semibold">Grupo Logístico</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Líderes en transporte y logística con décadas de experiencia. 
              Conectamos tu empresa con el mundo a través de soluciones integrales de transporte.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-accent-500 rounded-full"></div>
              <div className="w-8 h-1 bg-accent-400 rounded-full"></div>
              <div className="w-4 h-1 bg-accent-300 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4 relative">
              Servicios
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-500"></div>
            </h4>
            <div className="space-y-3">
              {
                isLoadingServices ? (
                  <div className="space-y-2">
                    <div className="h-4 bg-dark-600 rounded animate-pulse"></div>
                    <div className="h-4 bg-dark-600 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-dark-600 rounded animate-pulse w-1/2"></div>
                  </div>
                ) : (
                  services?.map(service => (
                    <Link 
                      href={`/servicios/${service.slug}`} 
                      className="block text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-sm group" 
                      key={service.id}
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  ))
                )
              }
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4 relative">
              Contáctanos
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-500"></div>
            </h4>
            <div className="space-y-4">
              {enterprise?.length && !isLoadingEnterprise ? (
                <>
                  <div className="flex items-start gap-4 group">
                    <FontAwesomeIcon 
                      icon={faMapLocation} 
                      className="text-accent-400 group-hover:text-accent-300 transition-colors duration-300 mt-1" 
                      size="lg" 
                    />
                    <p className="text-neutral-300 text-sm leading-relaxed">{enterprise[0].address}</p>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <FontAwesomeIcon 
                      icon={faPhone} 
                      className="text-accent-400 group-hover:text-accent-300 transition-colors duration-300" 
                      size="lg" 
                    />
                    <p className="text-neutral-300 text-sm">{`${enterprise[0].phone} - ${enterprise[0].cellphone}`}</p>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="text-accent-400 group-hover:text-accent-300 transition-colors duration-300" 
                      size="lg" 
                    />
                    <p className="text-neutral-300 text-sm">{redes.email}</p>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-dark-600 rounded animate-pulse"></div>
                    <div className="h-4 bg-dark-600 rounded animate-pulse flex-1"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-dark-600 rounded animate-pulse"></div>
                    <div className="h-4 bg-dark-600 rounded animate-pulse flex-1"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4 relative">
              Síguenos
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-500"></div>
            </h4>
            <div className="flex flex-wrap gap-4">
              {redes.facebook && (
                <Link 
                  href={redes.facebook} 
                  className="text-neutral-400 hover:text-accent-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-dark-700/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
                </Link>
              )}
              {redes.instagram && (
                <Link 
                  href={redes.instagram} 
                  className="text-neutral-400 hover:text-accent-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-dark-700/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
                </Link>
              )}
              {redes.xtwitter && (
                <Link 
                  href={redes.xtwitter} 
                  className="text-neutral-400 hover:text-accent-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-dark-700/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
                </Link>
              )}
              {redes.linkedin && (
                <Link 
                  href={redes.linkedin} 
                  className="text-neutral-400 hover:text-accent-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-dark-700/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
              )}
              {redes.youtube && (
                <Link 
                  href={redes.youtube} 
                  className="text-neutral-400 hover:text-accent-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-dark-700/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareYoutube} size="2x" />
                </Link>
              )}
            </div>
          </div>

        </div>

        <div className="border-t border-dark-600 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <nav className="flex items-center gap-8">
              <Link
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-sm font-medium"
                href='/'>
                Inicio
              </Link>
              <Link
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-sm font-medium"
                href='/nosotros'>
                Nosotros
              </Link>
              <Link
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-sm font-medium"
                href='/servicios'>
                Servicios
              </Link>
              <Link
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-sm font-medium"
                href='/contacto'>
                Contacto
              </Link>
            </nav>
            <div className="text-center md:text-right">
              <p className="text-neutral-400 text-sm">
                Copyright © {new Date().getFullYear()} M.S. Grupo Logístico
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer