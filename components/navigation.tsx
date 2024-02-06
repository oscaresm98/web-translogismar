'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
import LinksServices from "./links-services";

export default function Navigation() {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const openDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <nav className="flex items-center md:w-auto md:gap-5 mt-4 md:mt-0 flex-col md:flex-row w-full md:relative">
      <Link
        className={`uppercase text-[#0059aa] font-bold w-full text-center texts text-sm p-2 transition duration-400 delay-150 hover:text-[#ff6a0f] ${currentRoute === "/" ? "text-[#ff6a0f]" : ""}`}
        href='/'>
        Inicio
      </Link>
      <div className="relative md:static w-full">
        <Link
          onClick={toggleDropdown}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className={`uppercase text-[#0059aa] font-bold w-full flex items-center justify-center gap-1 text-center texts text-sm p-2 transition duration-400 delay-150 hover:text-[#ff6a0f] ${currentRoute === "/servicios" ? "text-[#ff6a0f]" : ""}`}
          href='/servicios'>
            Servicios
            <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-300 ${isOpen && 'rotate-180'}`} />
        </Link>
        <div
          onMouseEnter={openDropdown} onMouseLeave={closeDropdown}
          className={`${isOpen && 'max-h-[450px] py-2'} overflow-hidden transition-all duration-300 delay-150 absolute top-full left-[4.16%] md:left-0 z-10 w-11/12 md:w-full rounded shadow-md bg-white max-h-0`}
        >
          <LinksServices />
        </div>
        {/* {isOpen && (
        )} */}
      </div>
      <Link
        className={`${isOpen ? "mt-44 sm:mt-40 md:mt-0" : "mt-0"} uppercase text-[#0059aa] font-bold w-full text-center texts text-sm p-2 transition-all duration-400 delay-150 hover:text-[#ff6a0f] ${currentRoute === "/nosotros" ? "text-[#ff6a0f]" : ""}`}
        href='/nosotros'>
        Nosotros
      </Link>
      <Link
        className={`uppercase text-[#0059aa] font-bold w-full text-center texts text-sm p-2 transition duration-400 delay-150 hover:text-[#ff6a0f] ${currentRoute === "/contacto" ? "text-[#ff6a0f]" : ""}`}
        href='/contacto'>
        Contacto
      </Link>
    </nav>
  )
}
