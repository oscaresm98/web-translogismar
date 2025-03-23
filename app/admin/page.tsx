'use client'
import { useSession } from "next-auth/react"
import Image from "next/image"
import logo from "@/public/img/logoMundo.svg"
// import { signOut } from "next-auth/react"


export default function Admin() {
  const { data: session, status } = useSession()
  return (
    <div className="container flex flex-col gap-6 items-center overflow-hidden">
      <Image className="w-80" src={logo} alt="Imagen Logo" loading="lazy" />
      <h1 className="text-3xl md:text-5xl text-center text-orange-500">Sistema de administración de contenido</h1>
      <h2 className="text-2xl md:text-4xl text-center text-orange-500">Hola <span className="text-blue-500">{session?.user?.name}</span></h2>
      <p className="text-center">Bienvenido al Panel de Administración de M.S. Grupo Logístico. Este panel permite gestionar el contenido que se muestra en la pagina web.</p>
      {/* <button onClick={() => signOut()} className="px-4 py-2 bg-blue-700 text-white font-semibold rounded-sm">Cerrar Sesión</button> */}
    </div>
  )
}
