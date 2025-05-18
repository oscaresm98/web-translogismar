'use client'
import { useRouter } from 'next/navigation'
import NewsInterface from "@/interfaces/newsInterface";
import Image from 'next/image';
import { useState } from 'react';

export default function Noticia({ noticia }: { noticia: NewsInterface }) {
    const router = useRouter();
    const { title, slug, content, imageURL, id } = noticia;
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (confirm(`¿Estás seguro de eliminar la noticia "${title}"?`)) {
            try {
                setIsDeleting(true);
                const response = await fetch(`/api/noticias/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Recargar los datos para actualizar la lista
                    router.refresh();
                } else {
                    const data = await response.json();
                    alert(`Error al eliminar: ${data.message}`);
                }
            } catch (error) {
                console.error('Error al eliminar la noticia:', error);
                alert('Ocurrió un error al intentar eliminar la noticia');
            } finally {
                setIsDeleting(false);
            }
        }
    };

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
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs mr-3"
                    onClick={() => router.push(`/admin/noticias/${id}/editar`)}
                >
                    Editar
                </button>
                
                <button
                    type="button"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    onClick={handleDelete}
                    disabled={isDeleting}
                >
                    {isDeleting ? 'Eliminando...' : 'Eliminar'}
                </button>
            </td>
        </tr>
    )
}
