'use client';
import Link from "next/link";

export default function Contacto() {
  return (
    <section className='py-24 mt-24 bg-cover bg-center contacto'>
      <style jsx>{`
                .contacto {
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url('/img/camion.jpg')
                }
      `}</style>
      <div className="container md:px-8 flex flex-col text-center items-center">
        <h2 className="text-4xl font-bold text-white my-10">Encuentra el mejor servicio del mercado</h2>
        <p className="text-white mb-10">Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
        <Link href="/contacto" className="bg-[#ff6a0f] transition duration-400 delay-150 hover:bg-[#9b5428] p-3 text-white font-semibold rounded-sm">Contáctanos</Link>
      </div>
    </section>
  )
}
