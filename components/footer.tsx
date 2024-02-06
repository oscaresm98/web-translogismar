import Image from "next/image"
import Link from "next/link"
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faMapLocation, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../public/img/logoMundo.png"
import Navigation from "./navigation"



const Footer = () => {
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
            <p className="font-bold text-blue-950">Translogismar S.A.</p>
          </div>
          <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus doloremque quo ipsa delectus iure aut rerum nobis. Cumque eum, dolor quo beatae, voluptatibus ex est nesciunt debitis perferendis tempore odio.</p>
        </div>

        <div className="flex flex-col gap-3 mt-8 w-[80%] md:w-auto h-full">
          <span className="mb-3 text-blue-950 uppercase sm:text-center lg:text-start"><strong>Servicios</strong></span>
          <Link href="/" className="text-[#0059aa] hover:text-[#ff6a0f] text-sm">Transporte terreste</Link>
          <Link href="/" className="text-[#0059aa] hover:text-[#ff6a0f] text-sm">Estiba de carga</Link>
          <Link href="/" className="text-[#0059aa] hover:text-[#ff6a0f] text-sm">Mudanza residencial y comercial</Link>
          <Link href="/" className="text-[#0059aa] hover:text-[#ff6a0f] text-sm">Candado sátelital</Link>
        </div>

        <div className="flex flex-col gap-3 mt-8 w-[80%] md:w-auto h-full">
          <span className="mb-3 text-blue-950 uppercase sm:text-center lg:text-start"><strong>Contáctenos</strong></span>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapLocation} className="text-[#0059aa]" size="2x" />
            <p className="text-sm">Guayaquil - Prosperina km. 6.5 vía Daule</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-[#0059aa]" size="2x" />
            <p className="text-sm">(04) 2222222  - 0999999999</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#0059aa]" size="2x" />
            <p className="text-sm">info@translogismar.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-8 w-[80%] md:w-auto h-full">

          <span className="mb-3 text-blue-950 uppercase sm:text-center lg:text-start"><strong>Síguenos</strong></span>

          <div className="flex flex-col md:flex-row gap-5 md:justify-center">
            <Link href="/" className="text-[#0059aa] hover:text-[#ff6a0f]">
              <FontAwesomeIcon icon={faSquareFacebook} size="3x" />
            </Link>
            <Link href="/" className="text-[#0059aa] hover:text-[#ff6a0f]">
              <FontAwesomeIcon icon={faSquareInstagram} size="3x" />
            </Link>
            <Link href="/" className="text-[#0059aa] hover:text-[#ff6a0f]">
              <FontAwesomeIcon icon={faSquareXTwitter} size="3x" />
            </Link>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center mt-3 gap-2 md:gap-0 md:mt-auto md:flex-row md:justify-between lg:container lg:mx-auto">
        <nav className="flex items-center md:w-auto md:gap-5 mt-4 md:mt-0 flex-col md:flex-row w-full">
          <Link
            className={`uppercase text-[#0059aa] w-full text-center texts text-sm p-2 transition duration-400 delay-150 hover:text-[#ff6a0f] focus:text-[#ff6a0f]`}
            href='/'>
            Inicio
          </Link>
          <Link
            className={`uppercase text-[#0059aa] w-full text-center texts text-sm p-2 transition duration-400 delay-150 hover:text-[#ff6a0f] focus:text-[#ff6a0f]`}
            href='/nosotros'>
            Nosotros
          </Link>
          <Link
            className={`uppercase text-[#0059aa] w-full text-center texts text-sm p-2 transition duration-400 delay-150 hover:text-[#ff6a0f] focus:text-[#ff6a0f]`}
            href='/contacto'>
            Contacto
          </Link>
        </nav>
        <p className="text-center text-sm">Copyright &#169; {new Date().getFullYear()} | Translogismar S.A.</p>
      </div>


    </footer>
  )
}

export default Footer