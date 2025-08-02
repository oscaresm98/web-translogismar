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
    <nav className="flex items-center md:w-auto md:gap-2 lg:gap-4 mt-4 md:mt-0 flex-col md:flex-row w-full md:relative">
      <Link
        className={`nav-link ${currentRoute === "/" ? "nav-link-active" : ""}`}
        href='/'>
        Inicio
      </Link>
      <div className="relative md:static w-full">
        <button
          onClick={toggleDropdown}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className={`nav-link nav-dropdown ${currentRoute === "/servicios" ? "nav-link-active" : ""}`}
        >
          Servicios
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`ml-1 text-xs transition-transform duration-300 ${isOpen && 'rotate-180'}`} 
          />
        </button>
        <div
          onMouseEnter={openDropdown} 
          onMouseLeave={closeDropdown}
          className={`dropdown-menu ${isOpen ? 'dropdown-open' : ''}`}
        >
          <LinksServices />
        </div>
      </div>
      <Link
        className={`nav-link ${isOpen ? "md:mt-0" : ""} ${currentRoute === "/noticias" ? "nav-link-active" : ""}`}
        href='/noticias'>
        Noticias
      </Link>
      <Link
        className={`nav-link ${isOpen ? "md:mt-0" : ""} ${currentRoute === "/nosotros" ? "nav-link-active" : ""}`}
        href='/nosotros'>
        Nosotros
      </Link>
      <Link
        className={`nav-link ${currentRoute === "/contacto" ? "nav-link-active" : ""}`}
        href='/contacto'>
        Contacto
      </Link>
    </nav>
  )
}
