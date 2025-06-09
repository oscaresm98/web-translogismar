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
    <footer className="p-4 mt-7 bg-gray-300/40">
      <div className="flex flex-col gap-4 md:mb-24 items-center sm:grid sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
        <div className="mt-8 md:mt-3 w-[80%] md:w-auto h-full">
          <div className="flex items-center mb-3">
            <Link href="/" className="flex">
              <Image
                className="mx-auto md:mx-0"
                src={logo}
                alt='imagen de logo mundo'
                priority
                width={100}
              />
            </Link>
            <p className="font-bold text-blue-950">Grupo MS Transporte</p>
          </div>
          <p className="text-sm">Grupo Logístico MS Transporte ofrece soluciones integrales para el manejo eficiente de su mercadería.</p>
        </div>

        <div className="flex flex-col gap-3 mt-8 w-[80%] md:w-auto h-full">
          <span className="mb-3 text-blue-950 uppercase sm:text-center lg:text-start"><strong>Servicios</strong></span>

          {
            isLoadingServices ? <p>Cargando...</p> :
              services?.map(service => (
                <Link href={`/servicios/${service.slug}`} className="text-secun hover:text-prima text-sm" key={service.id}>{service.name}</Link>
              ))
          }
        </div>

        <div className="flex flex-col gap-3 mt-8 w-[80%] md:w-auto h-full">
          <span className="mb-3 text-blue-950 uppercase sm:text-center lg:text-start"><strong>Contáctenos</strong></span>
          {enterprise?.length && !isLoadingEnterprise &&
            (
              <>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapLocation} className="text-secun" size="2x" />
                  <p className="text-sm">{enterprise[0].address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-secun" size="2x" />
                  <p className="text-sm">{`${enterprise[0].phone} - ${enterprise[0].cellphone}`}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-secun" size="2x" />
                  <p className="text-sm">{redes.email}</p>
                </div>
              </>
            )
          }

        </div>

        <div className="flex flex-col gap-3 mt-8 w-[80%] md:w-auto h-full">

          <span className="mb-3 text-blue-950 uppercase sm:text-center lg:text-start"><strong>Síguenos</strong></span>

          <div className="flex flex-col md:flex-row gap-5 md:justify-center">

            {
              redes.facebook && (
                <Link href={redes.facebook} className="text-secun hover:text-prima">
                  <FontAwesomeIcon icon={faSquareFacebook} size="3x" />
                </Link>

              )
            }
            {
              redes.instagram && (
                <Link href={redes.instagram} className="text-secun hover:text-prima">
                  <FontAwesomeIcon icon={faSquareInstagram} size="3x" />
                </Link>

              )
            }
            {
              redes.xtwitter && (
                <Link href={redes.xtwitter} className="text-secun hover:text-prima">
                  <FontAwesomeIcon icon={faSquareXTwitter} size="3x" />
                </Link>
              )
            }
            {
              redes.linkedin && (
                <Link href={redes.linkedin} className="text-secun hover:text-prima">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </Link>
              )
            }
            {
              redes.youtube && (
                <Link href={redes.youtube} className="text-secun hover:text-prima">
                  <FontAwesomeIcon icon={faSquareYoutube} size="3x" />
                </Link>
              )
            }


          </div>
        </div>

      </div>

      <div className="flex flex-col items-center mt-3 gap-2 md:gap-0 md:mt-auto md:flex-row md:justify-between lg:container lg:mx-auto">
        <nav className="flex items-center md:w-auto md:gap-5 mt-4 md:mt-0 flex-col md:flex-row w-full">
          <Link
            className={`uppercase text-secun w-full text-center texts text-sm p-2 transition duration-300 delay-150 hover:text-prima focus:text-prima`}
            href='/'>
            Inicio
          </Link>
          <Link
            className={`uppercase text-secun w-full text-center texts text-sm p-2 transition duration-300 delay-150 hover:text-prima focus:text-prima`}
            href='/nosotros'>
            Nosotros
          </Link>
          <Link
            className={`uppercase text-secun w-full text-center texts text-sm p-2 transition duration-300 delay-150 hover:text-prima focus:text-prima`}
            href='/contacto'>
            Contacto
          </Link>
        </nav>
        <p className="text-center text-sm">Copyright &#169; {new Date().getFullYear()} | M.S. Grupo Logístico</p>
      </div>


    </footer>
  )
}

export default Footer