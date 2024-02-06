import Link from "next/link"
import Image from "next/image";
import logoMundo from "@/public/img/logoMundo.png"

export default function LinksServices() {
  const linkStyles = `capitalize text-center md:text-start text-sm block p-2 md:p-0 text-[#0059aa] hover:text-[#ff6a0f]`;
  return (
    <div className='md:grid md:grid-cols-2 md:p-4 md:gap-2 items-center'>

      <div className="hidden md:flex md:flex-col justify-center bg-slate-100/90 h-full p-2 rounded">
        <Image
          src={logoMundo}
          alt='imagen de logo mundo'
          priority
          width={70}
        />
        <p className="text-slate-700">Translogismar S.A.</p>
        <p className="hidden md:block text-black/70 text-xs">Transportando su Carga con Seguridad y Experiencia.</p>
      </div>

      <div>
        <div className="md:hover:bg-slate-100 md:p-2">
          <Link href='/' className={linkStyles}>
            <h3>Transporte Terrestre</h3>
          </Link>
          <p className="hidden md:block text-black/70 text-xs">Re-usable components built using Radix UI and Tailwind CSS.</p>
        </div>

        <div className="md:mt-5 md:hover:bg-slate-100 md:p-2">
          <Link href='/' className={linkStyles}>
            <h3>Estiba de carga</h3>
          </Link>
          <p className="hidden md:block text-black/70 text-xs">How to install dependencies and structure your app.</p>
        </div>

        <div className="md:mt-5 md:hover:bg-slate-100 md:p-2">
          <Link href='/' className={linkStyles}>
            <h3>Mudanza residencial y comercial</h3>
          </Link>
          <p className="hidden md:block text-black/70 text-xs">How to install dependencies and structure your app.</p>
        </div>

        <div className="md:mt-5 md:hover:bg-slate-100 md:p-2">
          <Link href='/' className={linkStyles}>
            <h3>Candado sátelital</h3>
          </Link>
          <p className="hidden md:block text-black/70 text-xs">How to install dependencies and structure your app.</p>
        </div>
      </div>

    </div>
  )
}
