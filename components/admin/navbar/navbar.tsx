'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar, { SidebarItem } from "@/components/admin/navbar/sidebar";
import { faSackDollar, faHandHoldingDollar, faUsers, faShareNodes, faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <Sidebar>

      <Link href="/admin/servicios">
        <SidebarItem
          icon={faHandHoldingDollar}
          text="Servicios"
          active={currentRoute === "/admin/servicios"}
        />
      </Link>

      <Link href="/admin/nosotros">
        <SidebarItem
          icon={faUsers}
          text="Nosotros"
          active={currentRoute === "/admin/nosotros"}
        />
      </Link>

      <Link href="/admin/sociales">
        <SidebarItem
          icon={faShareNodes}
          text="Redes Sociales"
        />
      </Link>

      <Link href="/admin/clientes">
        <SidebarItem
          icon={faSackDollar}
          text="clientes"
        />
      </Link>

      <Link href="/admin/noticias">
        <SidebarItem
          icon={faNewspaper}
          text="noticias"
        />
      </Link>

    </Sidebar>
  )
}
