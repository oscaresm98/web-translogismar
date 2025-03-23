
import Link from "next/link"

export default async function HeaderAdmin() {

  return (
    <header className="px-2 bg-white">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="text-xl my-7 font-light text-prima">Bienvenido al <span className="text-secun font-bold">Admin</span></h1>
        <div>
          <Link
            href="/"
            className={`uppercase text-secun font-bold w-full text-center text-sm p-2 transition duration-300 delay-100 hover:text-prima hover:cursor-pointer`}
            target="_blank"
          >Ver Sitio</Link>
          <Link
            href="/api/auth/signout"
            className={`uppercase text-secun font-bold w-full text-center text-sm p-2 transition duration-300 delay-100 hover:text-prima hover:cursor-pointer`}
          >Cerrar Sesión</Link>
        </div>
      </div>
    </header >
  )
}
