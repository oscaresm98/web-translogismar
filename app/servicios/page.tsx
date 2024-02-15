import ServiceCard from "@/components/servicios/service-card"
import ServiceInterface from "@/interfaces/serviceInterface"
import { Metadata } from "next"
import Link from "next/link"

const servicesData: ServiceInterface[] = [
  {
    id: 1,
    name: "Transporte Terrestre",
    price: 500,
    image: "exmaple.jpg",
    description: "Ofrecemos un transporte confiable y seguro de carga pesada en todo el país. Ya sea para envíos locales o nacionales, nuestro equipo de expertos se encargará de entregar su carga de manera eficiente y en perfectas condiciones.",
    subtitle: "El Mejor Servicio del Mercado",
    slug: "s1"
  },
  {
    id: 2,
    name: "Estiba de Carga",
    price: 150,
    image: "exmaple.jpg",
    description: "Nuestro equipo de expertos en estiba se encarga de cargar y descargar su carga de manera segura y eficiente. Utilizamos técnicas y equipos especializados para garantizar que su carga esté asegurada y lista para el transporte terrestre sin problemas. Confíe en nosotros para una manipulación cuidadosa de su mercancía.",
    subtitle: "Personal Altamente Calificado",
    slug: "s2"
  },
  {
    id: 3,
    name: "Mudanza Residencial y Comercial",
    price: 500,
    image: "exmaple.jpg",
    description: "Facilitamos sus mudanzas con nuestro servicio profesional de mudanza. Ya sea para hogares o negocios, nuestro equipo se encarga de embalar, transportar y desembalar sus pertenencias con cuidado y eficiencia, garantizando una transición sin problemas.",
    subtitle: "Con Más de 10 Años de Experiencia",
    slug: "s3"
  },
  {
    id: 4,
    name: "Candato Satelital",
    price: 300,
    image: "exmaple.jpg",
    description: "Introducimos una capa adicional de seguridad a su carga con nuestro servicio de seguimiento mediante candado satelital. Con esta tecnología avanzada, puede monitorear la ubicación y el estado de su carga en tiempo real. Aumente la visibilidad y la tranquilidad, asegurando que sus envíos estén siempre bajo control y protegidos durante todo el trayecto. Confíe en Translogismar SA para un transporte más seguro y confiable.",
    subtitle: "La Solución Sobre Ruedas",
    slug: "s4"
  }
]

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Translogismar S.A. - Servicios de transporte terrestre de carga pesada por todo el pais.'
}

export default function Sercivios<ServiceInterface>() {
  return (
    <main className="container md:px-8">
      <h1 className="text-5xl text-[#ff6a0f] text-center font-bold my-12">Transporte de Carga Pesada</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        {
          servicesData?.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              position={i}
            />
          ))
        }
      </div>
      <div className="text-center">
        <h3 className="font-bold text-gray-400 text-3xl block my-12">Para obtener Informacion mas detallada y personalizada ponte en contacto con nosotros</h3>
        <Link href="/contacto" className="block md:inline-block bg-[#ff6a0f] mb-12 transition duration-300 delay-150 hover:bg-[#9b5428] p-3 text-white font-semibold rounded-sm scale-100 hover:scale-105 ease-in">Contáctanos</Link>
      </div>
    </main>
  )
}
