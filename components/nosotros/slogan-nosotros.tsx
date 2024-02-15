'use client'
import Image from "next/image"
import imagenPersonal from "@/public/img/personal.png"
import useIntersection from "@/hooks/useIntersection"


function SloganNosotros() {
  const [sloganRef, isready] = useIntersection({threshold: 0.1})
  return (
    <section 
      ref={sloganRef}
      className={`my-12 transition-all duration-500 delay-150 ${isready ? 'opacity-100' : 'opacity-0'}`}
    >
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
  )
}

export default SloganNosotros