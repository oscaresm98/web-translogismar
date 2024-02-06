import Image from "next/image"
import imagenNosotros from "@/public/img/nosotros.jpg"
import imagenPersonal from "@/public/img/personal.png"
import MisionVision from "@/components/mision-vision"


export const metadata = {
  title: 'Nosotros',
  description: 'Sobre nosotros, Translogismar S.A. Empresa de transporte terrestre',
}

export default function Nosotros() {
  return (
    <>
    <main className="container md:px-8">
        <h1 className="text-5xl font-black text-center my-12 text-[#ff6a0f]">Sobre Nosotros</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-10">
          <Image
            src={imagenNosotros}
            alt='imagen de Nosotros'
            priority
          />
          <div>
            <p>Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus. Aenean nulla tellus, aliquet in laoreet eu, varius at quam.</p>
            <p>Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus.</p>
            <p>Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus. Aenean nulla tellus, aliquet in laoreet eu, varius at quam.</p>
          </div>
        </div>
      </main>
      <MisionVision />
      <section className="my-12">
        <Image
          src={imagenPersonal}
          alt="imagen de personal"
          priority
        />
        <div className="container">
          <h3 className="text-3xl font-bold text-[#ff6a0f] text-center uppercase"><span className="text-[#0059aa] font-black">Más que Transporte</span> Somos Compromiso</h3>
          <p className="mt-5 text-center">En Translogismar SA, el transporte de su carga va más allá de la logística. Es un compromiso total con la responsabilidad y la integridad. Nuestro equipo se dedica a garantizar que su carga llegue a su destino con la misma importancia que usted le otorga. Su carga es nuestra responsabilidad, y lo tomamos en serio.</p>
        </div>

      </section>
    </>
  )
}
