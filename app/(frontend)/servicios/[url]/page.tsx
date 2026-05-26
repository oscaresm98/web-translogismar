import Service from "@/components/servicios/service"
import { Metadata } from "next"
import { getServicesPrisma } from "@/data/prismaServicios"
import ServiceInterface from "@/interfaces/serviceInterface"

export const revalidate = 43200;

export async function generateMetadata({ params }: { params: Promise<{ url: string }> }): Promise<Metadata> {
  const { url } = await params
  const services = await getServicesPrisma() as ServiceInterface[];
  const service = services.find(service => service.slug === url);

  if (!service) return { title: 'Servicio no encontrado' };

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

export default async function Servicio({ params }: { params: Promise<{ url: string }> }) {
  const { url } = await params
  return (
    <main className="max-w-6xl mx-auto my-12 grid md:grid-cols-2 gap-4 items-center p-4 md:p-0">
      <Service serviceSlug={url} />
    </main>
  )
}
