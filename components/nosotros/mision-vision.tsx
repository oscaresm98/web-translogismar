'use client'
import useIntersection from "@/hooks/useIntersection";
import EnterpriseInterface from "@/interfaces/enterpriseInterface";
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MisionVisionProps = {
    enterprise: EnterpriseInterface
}

function MisionVision({enterprise}: MisionVisionProps) {

    const [misionRef, readyMV] = useIntersection({ threshold: 0.3 })

    return (
        <div className="grid fondo p-5 gap-5 min-h-[450px] mt-12 md:grid-cols-2 items-center">
            <style jsx>{`
                .fondo {
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url('/img/MisionVision.jpeg');
                    background-size: cover;
                    background-position: center center;
                }
            `}</style>
            <div
                ref={misionRef}
                className={`flex flex-col items-center self-start transition-all duration-500 delay-150 ${readyMV ? 'translate-x-0 opacity-100' : 'translate-x-[-10rem] opacity-0'}`}
            >
                <FontAwesomeIcon icon={faArrowsToDot} className="text-white mt-10" size="7x" />
                <h2 className="text-4xl text-white font-bold mt-5">Misión</h2>
                <div className="text-white text-center mt-5 prose prose-invert max-w-none">
                    {enterprise.descMision.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="my-2">{paragraph}</p>
                    ))}
                </div>
            </div>
            <div
                className={`flex flex-col items-center self-start transition-all duration-500 delay-150 ${readyMV ? 'translate-x-0 opacity-100' : 'translate-x-[10rem] opacity-0'}`}
            >
                <FontAwesomeIcon icon={faArrowsToDot} className="text-white mt-10" size="7x" />
                <h2 className="text-4xl text-white font-bold mt-5">Visión</h2>
                <div className="text-white text-center mt-5 prose prose-invert max-w-none">
                    {enterprise.descVision.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="my-2">{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MisionVision