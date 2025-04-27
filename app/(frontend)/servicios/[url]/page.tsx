import Service from "@/components/servicios/service"
import { Metadata } from "next"
import { getServicesPrisma } from "@/data/prismaServicios"
import ServiceInterface from "@/interfaces/serviceInterface"

// Implementar ISR con revalidación cada 12 horas
export const revalidate = 43200;

// Generar metadatos dinámicos para SEO
export async function generateMetadata({ params }: { params: { url: string } }): Promise<Metadata> {
  const services = await getServicesPrisma() as ServiceInterface[];
  const service = services.find(service => service.slug === params.url);
  
  if (!service) {
    return {
      title: 'Servicio no encontrado'
    };
  }
  
  return {
    title: `MS - ${service.name}`,
    description: service.description.substring(0, 160),
    keywords: [`Transporte`, `Logística`, `${service.name}`, `M.S. Grupo Logístico`],
    openGraph: {
      images: [service.imageURL],
      title: service.name,
      description: service.phrase
    }
  };
}

export default async function Servicio({ params }: { params: { url: string } }) {
    return (
        <main className="max-w-6xl mx-auto my-12 grid md:grid-cols-2 gap-4 items-center p-4 md:p-0">
            <Service serviceSlug={params.url} />
        </main>
    )
}
