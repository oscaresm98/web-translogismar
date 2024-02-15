import ImageEffect from "@/components/effects/image-effect"
import ServiceInterface from "@/interfaces/serviceInterface"
import camion from "@/public/img/camion.jpg"
import Link from "next/link"

export const metadata = {
    title: 'Servicio',
  }

const service: ServiceInterface = {

    id: 1,
    name: "Transporte Terrestre",
    price: 500,
    image: "exmaple.jpg",
    description: "Ofrecemos un transporte confiable y seguro de carga pesada en todo el país. Ya sea para envíos locales o nacionales, nuestro equipo de expertos se encargará de entregar su carga de manera eficiente y en perfectas condiciones.",
    subtitle: "El Mejor Servicio del Mercado",
    slug: "s1"

}

export default function Servicio() {
    return (
        <main className="max-w-5xl mx-auto my-12 grid md:grid-cols-2 gap-4 items-center p-4 md:p-0">
            <ImageEffect
                url={camion}
                alternative="imagen Servicio"
            />
            <div className="flex flex-col gap-4 p-2">
                <h2 className="text-center md:text-left text-4xl text-[#ff6a0f] font-light">{service.name}</h2>
                <p className="">{service.description}</p>
                <p className="text-[#0059aa] font-bold text-4xl">${service.price}</p>
                <Link
                    href="/"
                    className={`bg-[#ff6a0f] text-center transition duration-300 delay-150 hover:bg-[#9b5428] p-3 text-white font-semibold rounded-sm`}
                >Quiero el Servicio</Link>
            </div>

        </main>
    )
}
