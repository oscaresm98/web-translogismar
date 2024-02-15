import MisionVision from "@/components/nosotros/mision-vision"
import SloganNosotros from "@/components/nosotros/slogan-nosotros"
import ImageEffect from "@/components/effects/image-effect"
import imagenNosotros from "@/public/img/nosotros.jpg"


export const metadata = {
  title: 'Nosotros',
  description: 'Sobre nosotros, Translogismar S.A. Empresa de transporte terrestre',
}

export default function Nosotros() {
  return (
    <>
    <main className="container md:px-8">
        <h1 className="text-5xl font-bold text-center my-12 text-[#ff6a0f]">Sobre Nosotros</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-10">

            <ImageEffect
              url={imagenNosotros}
              alternative='imagen de Nosotros'
            />
          <div>
            <p>Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus. Aenean nulla tellus, aliquet in laoreet eu, varius at quam.</p>
            <p>Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus.</p>
            <p>Fusce sed odio dictum quam iaculis ullamcorper. Nam id erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu tellus ut arcu pellentesque condimentum. Integer pharetra neque id fermentum dapibus. Integer sit amet tempus tellus. Aenean nulla tellus, aliquet in laoreet eu, varius at quam.</p>
          </div>
        </div>
      </main>

      <MisionVision />

      <SloganNosotros />

    </>
  )
}
