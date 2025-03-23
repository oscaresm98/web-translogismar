import Carousel from "@/components/principal/carousel";
import Spots from "@/components/principal/spots"
import Contacto from "@/components/principal/contacto";
import Image from "next/image";
import { ClientInteface } from "@/interfaces/clientInterface";
import { getClientsPrisma } from "@/data/prismaCliesntes";


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
                className="h-auto"
                src={client.imageURL}
                alt={`imagen del cliente ${client.name}`}
                width={250}
                height={250}
              />
            ))
          }
          {
            clients?.map(client => (
              <Image
                key={client.id}
                className="h-auto"
                src={client.imageURL}
                alt={`imagen del cliente ${client.name}`}
                width={250}
                height={250}
              />
            ))
          }
          {
            clients?.map(client => (
              <Image
                key={client.id}
                className="h-auto"
                src={client.imageURL}
                alt={`imagen del cliente ${client.name}`}
                width={250}
                height={250}
              />
            ))
          }
        </div>
      </section>

    </>
  );
}
