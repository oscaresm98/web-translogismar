'use client'
import { faArrowsToDot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MisionVision() {
    return (
        <div className="grid fondo p-5 gap-5 min-h-[450px] mt-12 md:grid-cols-2 items-center">
            <style jsx>{`
                .fondo {
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url('/img/MisionVision.jpeg');
                    background-size: cover;
                    background-position: center center;
                }
            `}</style>
            <div className="flex flex-col items-center self-start">
                <FontAwesomeIcon icon={faArrowsToDot} className="text-white mt-10" size="7x" />
                <h2 className="text-4xl text-white font-bold mt-5">Misión</h2>
                <p className="text-white text-center mt-5">Nuestra misión es ofrecer soluciones de transporte terrestre de carga pesada que superen las expectativas de nuestros clientes. Nos comprometemos a proporcionar servicios seguros, eficientes y personalizados, impulsados por la innovación y la excelencia operativa. Con cada entrega, buscamos fortalecer alianzas duraderas, contribuir al desarrollo sostenible y consolidarnos como líderes en la industria.</p>
            </div>
            <div className="flex flex-col items-center self-start">
                <FontAwesomeIcon icon={faArrowsToDot} className="text-white mt-10" size="7x"/>
                <h2 className="text-4xl text-white font-bold mt-5">Visión</h2>
                <p className="text-white text-center mt-5">Nuestra visión es ser reconocidos como el referente en el transporte terrestre de carga pesada, destacando por nuestra integridad, eficiencia y compromiso con la excelencia. Aspiramos a expandir nuestra presencia de manera sostenible, aprovechando tecnologías emergentes y prácticas ambientalmente responsables. Buscamos ser la elección preferida de clientes que valoran la calidad, la confianza y la innovación en el transporte de sus cargas.</p>
            </div>
        </div>
    )
}

export default MisionVision