import Carousel from "@/components/principal/carousel";
import Spots from "@/components/principal/spots"
import Contacto from "@/components/principal/contacto";
import Image from "next/image";
import { ClientInteface } from "@/interfaces/clientInterface";
import { getClientsPrisma } from "@/data/prismaClientes";

// Definir opciones de revalidación para ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidar cada hora

export default async function Home() {
  const clients = await getClientsPrisma() as ClientInteface[]
  return (
    <>
      <Carousel />

      <main className="container md:px-8">
        <h1 className="text-5xl my-7 font-bold text-prima text-center">M&aacute;s Sobre Nosotros</h1>
        <Spots />
      </main>

      <Contacto />

      <section className="container md:px-8">
        <h2 className="text-4xl text-center font-bold text-prima my-7">Nuestros clientes</h2>
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4">
          {
            clients?.map(client => (
              <Image
                key={client.id}
                className="h-auto transition-all duration-300 hover:scale-105"
                src={client.imageURL}
                alt={`imagen del cliente ${client.name}`}
                width={250}
                height={250}
                loading="lazy"
                quality={80}
                sizes="(max-width: 768px) 50vw, 250px"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+"
              />
            ))
          }
        </div>
      </section>
    </>
  );
}
