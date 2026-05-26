'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Sidebar, { SidebarItem } from '@/components/admin/navbar/sidebar'
import {
  faHandHoldingDollar,
  faUsers,
  faShareNodes,
  faSackDollar,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const currentRoute = usePathname()

  return (
    <Sidebar>
      <Link href="/admin/servicios">
        <SidebarItem
          icon={faHandHoldingDollar}
          text="Servicios"
          active={currentRoute.startsWith('/admin/servicios')}
        />
      </Link>

      <Link href="/admin/nosotros">
        <SidebarItem
          icon={faUsers}
          text="Nosotros"
          active={currentRoute.startsWith('/admin/nosotros')}
        />
      </Link>

      <Link href="/admin/sociales">
        <SidebarItem
          icon={faShareNodes}
          text="Redes Sociales"
          active={currentRoute.startsWith('/admin/sociales')}
        />
      </Link>

      <Link href="/admin/clientes">
        <SidebarItem
          icon={faSackDollar}
          text="Clientes"
          active={currentRoute.startsWith('/admin/clientes')}
        />
      </Link>

      <Link href="/admin/noticias">
        <SidebarItem
          icon={faNewspaper}
          text="Noticias"
          active={currentRoute.startsWith('/admin/noticias')}
        />
      </Link>
    </Sidebar>
  )
}
