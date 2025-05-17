import MisionVision from "@/components/nosotros/mision-vision"
import SloganNosotros from "@/components/nosotros/slogan-nosotros"
import ImageEffect from "@/components/effects/image-effect"
import EnterpriseInterface from "@/interfaces/enterpriseInterface"
import { getEnterprisesPrisma } from "@/data/prismaNosotros"


export const metadata = {
  title: 'Nosotros',
  description: 'Sobre nosotros, M.s. Grupo Logístico. Empresa de transporte terrestre',
}

export default async function Nosotros() {
  const nosotros = await getEnterprisesPrisma() as EnterpriseInterface[]
  return (
    <>
    <main className="container md:px-8">
        <h1 className="text-5xl font-bold text-center my-12 text-prima">Sobre Nosotros</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-10">

            <ImageEffect
              url={nosotros[0].ImageURL}
              alternative='imagen de Nosotros'
            />
          <div className="prose prose-lg max-w-none">
            {nosotros[0].descHistory.split('\n').map((paragraph, idx) => (
              <p key={idx} className="my-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </main>

      <MisionVision enterprise={nosotros[0]} />

      <SloganNosotros />

    </>
  )
}
