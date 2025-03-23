'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { deleteClient } from "@/data/clientes";
import { ClientInteface } from "@/interfaces/clientInterface"

type ClientFormProps = {
    client: ClientInteface
}

export default function Cliente({ client }: ClientFormProps) {
    const navigate = useRouter();
    const { name, description, imageURL, id } = client;


    return (

        <tr className="border-b ">
            <td className="p-4 max-w-28 max-h-10">
                <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{name}</p>
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
            <td className="p-4 max-h-10 space-x-2 text-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate.push(`/admin/clientes/${id}/editar`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    onClick={e => {
                        if (confirm(`¿Deseas eliminar el registro de ${name}?`)) {
                            deleteClient(id)
                            navigate.refresh()
                        }
                    }}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
