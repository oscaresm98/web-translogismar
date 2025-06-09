'use client'
import useIntersection from "@/hooks/useIntersection"

export default function Spots() {
  const [segRef, readySeg] = useIntersection({ threshold: 0.3 })
  return (
    <div className="grid md:grid-cols-3 gap-2">

      <div
        ref={segRef}
        className={`text-center transition-all duration-500 delay-150 ${readySeg ? 'translate-x-0 opacity-100' : 'translate-x-[-10rem] opacity-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-lock" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#233343" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>

        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Seguridad</h3>
        <p>Es esencial asegurar correctamente la carga, utilizar vehículos adecuados y seguir las normativas vigentes.La vigilancia constante y la planificación de rutas seguras son claves para un transporte eficiente y seguro</p>
      </div>

      <div
      className={`text-center mt-7 md:mt-0 transition-all duration-500 delay-150 ${readySeg ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-businessplan" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#233343" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
          <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <path d="M5 15v1m0 -8v1" />
        </svg>
        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Precio</h3>
        <p>Optimizamos costos operativos y negociar tarifas con proveedores. tarifas accesibles sin sacrificar la calidad del servicio, fomentando relaciones duraderas. La transparencia en la fijación de precios también genera confianza entre los clientes</p>
      </div>

      <div 
        className={`text-center mt-7 md:mt-0 transition-all duration-500 delay-150 ${readySeg ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-clock-hour-3" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#233343" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 12h3.5" />
          <path d="M12 7v5" />
        </svg>
        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Tiempo</h3>
        <p>El tiempo en el transporte de mercadería es un factor clave que impacta la satisfacción del cliente. Cumplir con los plazos de entrega establecidos no solo mejora la eficiencia operativa, sino que también fortalece la confianza del cliente.</p>
      </div>

    </div>
  )
}
