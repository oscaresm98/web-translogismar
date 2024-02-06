import Image from 'next/image'
import imagenContacto from '@/public/img/camion.jpg'

export const metadata = {
  title: 'Contacto',
  description: 'Contáctanos a toda hora, Translogismar S.A. Empresa de transporte terrestre',
}

export default function Contacto() {
  return (
    <main className="container md:px-8">
        <h1 className="text-5xl my-12 font-black text-[#ff6a0f] text-center">Contacto</h1>
        <Image
          src={imagenContacto}
          alt='imagen de contacto'
          priority
        />

        <h2 className="text-4xl mt-12 text-center">Llene el Formulario de Contacto</h2>
        <span className="block h-[3px] w-52 bg-slate-500 mx-auto mt-3"></span>
        <form action="" className="mt-12">

          <label htmlFor="nombre" className='block font-bold uppercase'>Nombre</label>
          <input type="text" id="nombre" className='p-3 block w-full border border-slate-300 rounded-md mb-5' />

          <label htmlFor="email" className='block font-bold uppercase'>E-mail</label>
          <input type="email" id="email" className='p-3 block w-full border border-slate-300 rounded-md mb-5' />

          <label htmlFor="telefono" className='block font-bold uppercase'>Teléfono</label>
          <input type="tel" id="telefono" className='p-3 block w-full border border-slate-300 rounded-md mb-5' />

          <label htmlFor="mensaje" className='block font-bold uppercase'>Mensaje</label>
          <textarea id="mensaje" className='p-3 block w-full border border-slate-300 rounded-md mb-5 h-52'></textarea>

          <input
              type="submit"
              className="bg-[#0059aa] p-3 w-full md:w-40 text-white uppercase font-bold hover:bg-[#0230E6] cursor-pointer transition-colors rounded-md"
              value='Enviar'
          />
        </form>
      </main>
  )
}
