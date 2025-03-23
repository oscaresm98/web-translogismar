'use client'
import { useRouter } from 'next/navigation'
import ServiceInterface from "@/interfaces/serviceInterface";
import Image from 'next/image';

export default function Servicio({ service }: { service: ServiceInterface }) {
    const navigate = useRouter();
    const { name, location, description, imageURL, id } = service;


    return (
        <tr className="border-b ">
            <td className="p-4 max-w-28 max-h-10">
                <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{name}</p>
            </td>
            <td className="p-4 w-4 max-h-10">
                <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{location}</p>
            </td>
            <td className="p-4 max-w-10 max-h-10">
                <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{description}</p>
            </td>
            <td className="p-4 max-w-10 max-h-10">
                <Image
                    className='mx-auto'
                    src={imageURL}
                    alt={`imagen de ${name}`}
                    width={100}
                    height={100}
                    loading='lazy'
                />
                {/* <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{imageURL}</p> */}
            </td>

            {/* acciones */}
            <td className="p-4 max-h-10 text-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate.push(`/admin/servicios/${id}/editar`)}
                >
                    Editar
                </button>
            </td>
        </tr>
    )
}
