import Carousel from "@/components/principal/carousel";
import Spots from "@/components/principal/spots"
import Contacto from "@/components/principal/contacto";
import imagenMarca1 from "@/public/img/Arcor.png"
import imagenMarca2 from "@/public/img/holcim.png"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel />

      <main className="container md:px-8">
        <h1 className="text-5xl my-7 font-bold text-[#ff6a0f] text-center">M&aacute;s Sobre Nosotros</h1>
        <Spots />
      </main>

      <Contacto />

      <section className="container md:px-8">
        <h2 className="text-4xl text-center font-bold text-[#ff6a0f] my-7">Nuestros clientes</h2>
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4">
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca1}
            alt='imagen de marca'
            loading="lazy"
          />
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca2}
            alt='imagen de marca'
            loading="lazy"
          />
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca1}
            alt='imagen de marca'
            loading="lazy"
          />
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca2}
            alt='imagen de marca'
            loading="lazy"
          />
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca1}
            alt='imagen de marca'
            loading="lazy"
          />
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca2}
            alt='imagen de marca'
            loading="lazy"
          />
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca1}
            alt='imagen de marca'
            loading="lazy"
          />
          <Image 
            className="h-auto w-[250px]"
            src={imagenMarca2}
            alt='imagen de marca'
            loading="lazy"
          />
        </div>
      </section>

    </>
  );
}
