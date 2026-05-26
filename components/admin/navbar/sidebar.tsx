'use client'
import { useContext, createContext, useState, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '@/public/img/logo.svg'

type SidebarContextType = {
  expanded: boolean
  setExpanded?: (expanded: boolean) => void
}

const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType)

export default function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
  const [expanded, setExpanded] = useState(true)

  // Colapsar automáticamente en mobile
  useEffect(() => {
    if (window.innerWidth < 768) setExpanded(false)
  }, [])

  return (
    <aside className="h-screen sticky top-0">
      <nav className="h-full flex flex-col bg-white border-r border-neutral-200 shadow-sm">
        <div className={`p-4 pb-2 flex items-center ${expanded ? 'justify-between' : 'justify-center'}`}>
          <Image
            className={`overflow-hidden transition-all duration-300 ${expanded ? 'w-28' : 'w-0'}`}
            src={logo}
            alt="Logo Grupo MS"
            priority
            width={120}
          />
          <button
            onClick={() => setExpanded(curr => !curr)}
            className="p-1.5 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors"
          >
            <FontAwesomeIcon
              className="text-secun transition duration-300 hover:text-prima cursor-pointer"
              icon={faBars}
              size="1x"
            />
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 pt-2">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active }: { icon: IconDefinition; text: string; active?: boolean }) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
          ? 'bg-accent-50 text-prima border-l-2 border-prima'
          : 'hover:bg-accent-50 hover:text-prima text-neutral-500'
        }
      `}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`w-4 p-1 shrink-0 ${active ? 'text-prima' : 'text-secun group-hover:text-prima transition-colors'}`}
        size="1x"
      />
      <span className={`overflow-hidden transition-all whitespace-nowrap ${expanded ? 'w-48 ml-3' : 'w-0'}`}>
        {text}
      </span>

      {!expanded && (
        <div className="
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-secun text-white text-xs font-medium
          invisible opacity-0 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          whitespace-nowrap z-50
        ">
          {text}
        </div>
      )}
    </li>
  )
}
