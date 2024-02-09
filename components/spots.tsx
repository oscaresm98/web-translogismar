import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoadLock, faHandHoldingDollar, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Spots() {
  return (
    <div className="grid md:grid-cols-3 gap-2">
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-lock" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0059aa" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>

        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Seguridad</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad quidem rem eos vitae! Aliquid dolore dolores asperiores reprehenderit velit animi quia unde aut, distinctio magni ea rem labore sit?</p>
      </div>
      <div className="text-center mt-7 md:mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-businessplan" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0059aa" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
          <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <path d="M5 15v1m0 -8v1" />
        </svg>
        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Precio</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam praesentium vel quod distinctio ipsam consequatur eveniet, suscipit minima non quibusdam repellat tempora sunt, dolorum, impedit delectus reiciendis nobis excepturi qui!</p>
      </div>
      <div className="text-center mt-7 md:mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-clock-hour-3" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0059aa" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 12h3.5" />
          <path d="M12 7v5" />
        </svg>
        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Tiempo</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolore dicta qui corrupti, non exercitationem ratione recusandae laboriosam molestias adipisci suscipit, reprehenderit repudiandae provident aliquam? Alias aspernatur est repellendus veniam!</p>
      </div>
    </div>
  )
}
