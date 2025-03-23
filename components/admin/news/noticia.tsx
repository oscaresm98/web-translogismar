'use client'
import { useRouter } from 'next/navigation'
import NewsInterface from "@/interfaces/newsInterface";
import Image from 'next/image';

export default function Noticia({ noticia }: { noticia: NewsInterface }) {
    const router = useRouter();
    const { title, slug, content, imageURL, id } = noticia;

    return (
        <tr className="border-b">
            <td className="p-4 max-w-28 max-h-10">
                <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{title}</p>
            </td>
            <td className="p-4 max-w-28 max-h-10">
                <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{slug}</p>
            </td>
            <td className="p-4 max-w-10 max-h-10">
                <p className="text-gray-600 line-clamp-3 md:line-clamp-2 text-ellipsis">{content}</p>
            </td>
            <td className="p-4 max-w-10 max-h-10">
                {imageURL && (
                    <Image
                        className="mx-auto"
                        src={imageURL}
                        alt={`Imagen de ${title}`}
                        width={100}
                        height={100}
                        loading="lazy"
                    />
                )}
            </td>
            <td className="p-4 max-h-10 text-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => router.push(`/admin/noticias/${id}/editar`)}
                >
                    Editar
                </button>
            </td>
        </tr>
    )
}
