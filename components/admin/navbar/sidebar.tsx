'use client'
import { useContext, createContext, useState } from "react"

import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition, faBars } from "@fortawesome/free-solid-svg-icons"
import logo from '@/public/img/logo.svg'

type SidebarContextType = {
  expanded: boolean,
  setExpanded?: (expanded: boolean) => void
}

const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType)

export default function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
  const [expanded, setExpanded] = useState(false)

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className={`p-4 pb-2 flex items-center ${expanded ? "justify-between" : "justify-center"}`}>
          <Image
            className={`overflow-hidden transition-all duration-300 ${expanded ? "w-32" : "w-0"
              }`}
            src={logo}
            alt='imagen de logo mundo'
            priority
            width={150}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <FontAwesomeIcon className="text-secun transition duration-300 delay-100 hover:text-prima hover:cursor-pointer" icon={faBars} size="1x" />
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active }: { icon: IconDefinition, text: string, active?: boolean }) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-blue-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <FontAwesomeIcon icon={icon} className="p-2 text-secun" size="1x" />
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
          }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-blue-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}