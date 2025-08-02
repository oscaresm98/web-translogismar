import Carousel from "@/components/principal/carousel";
import Spots from "@/components/principal/spots"
import Contacto from "@/components/principal/contacto";
import Image from "next/image";
import { ClientInteface } from "@/interfaces/clientInterface";
import { getClientsPrisma } from "@/data/prismaClientes";


export default async function Home() {
  const clients = await getClientsPrisma() as ClientInteface[]
  return (
    <>
      <Carousel />

      <main className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <h1 className="text-5xl lg:text-6xl mb-4 font-bold text-gradient-secondary text-center animate-fade-in">
            Más Sobre Nosotros
          </h1>
          <p className="text-xl text-neutral-600 text-center mb-12 max-w-3xl mx-auto">
            Descubre por qué somos líderes en transporte y logística
          </p>
          <Spots />
        </div>
      </main>

      <Contacto />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-5xl text-center font-bold text-gradient-secondary mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Empresas que confían en nuestros servicios de transporte
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
            {
              clients?.map(client => (
                <div key={client.id} className="card card-hover p-6 w-full h-32 flex items-center justify-center group">
                  <Image
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    src={client.imageURL}
                    alt={`Logo del cliente ${client.name}`}
                    width={200}
                    height={100}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>

    </>
  );
}
