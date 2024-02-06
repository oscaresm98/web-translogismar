import Carousel from "@/components/carousel";
import Spots from "@/components/spots"
import Contacto from "@/components/contacto";
export default function Home() {

  return (
    <div className="">
      <Carousel />

      <main className="container md:px-8">
        <h1 className="text-5xl my-7 font-bold text-[#ff6a0f] text-center">M&aacute;s Sobre Nosotros</h1>
        <Spots />
      </main>

      <Contacto />

    </div>
  );
}
