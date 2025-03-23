import ImageEffect from '@/components/effects/image-effect'
import imagenContacto from '@/public/img/camion.jpg'

export const metadata = {
  title: 'Contacto',
  description: 'Contáctanos a toda hora, M.S. Grupo Logístico. Empresa de transporte terrestre',
}

export default function Contacto() {
  return (
    <main className="max-w-5xl mx-auto p-4 md:p-0">
        <h1 className="text-5xl my-12 font-bold text-prima text-center">Contacto</h1>
        <ImageEffect
          url="/img/camion.jpg"
          alternative='imagen de contacto'
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
              className="bg-secun p-3 w-full md:w-40 text-white uppercase font-bold hover:bg-[#0230E6] cursor-pointer transition-colors rounded-md"
              value='Enviar'
          />
        </form>
      </main>
  )
}
