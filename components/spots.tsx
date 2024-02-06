import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoadLock, faHandHoldingDollar, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Spots() {
  return (
    <div className="grid md:grid-cols-3 gap-2">
      <div className="text-center">
        <FontAwesomeIcon icon={faRoadLock} size="10x" color="#0059aa" />
        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Seguridad</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad quidem rem eos vitae! Aliquid dolore dolores asperiores reprehenderit velit animi quia unde aut, distinctio magni ea rem labore sit?</p>
      </div>
      <div className="text-center mt-7 md:mt-0">
        <FontAwesomeIcon icon={faHandHoldingDollar} size="10x" color="#0059aa" />
        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Precio</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam praesentium vel quod distinctio ipsam consequatur eveniet, suscipit minima non quibusdam repellat tempora sunt, dolorum, impedit delectus reiciendis nobis excepturi qui!</p>
      </div>
      <div className="text-center mt-7 md:mt-0">
        <FontAwesomeIcon icon={faClock} size="10x" color="#0059aa" />
        <h3 className="text-3xl uppercase font-semibold text-[#ff6a0f] my-7">Tiempo</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolore dicta qui corrupti, non exercitationem ratione recusandae laboriosam molestias adipisci suscipit, reprehenderit repudiandae provident aliquam? Alias aspernatur est repellendus veniam!</p>
      </div>
    </div>
  )
}
