'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import NewsInterface from '@/interfaces/newsInterface'
import Toast from '@/components/admin/toast'

export default function Noticia({ noticia }: { noticia: NewsInterface }) {
  const router = useRouter()
  const { title, content, imageURL, id } = noticia
  const [isDeleting, setIsDeleting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleDelete = async () => {
    if (!confirm(`¿Estás seguro de eliminar la noticia "${title}"?`)) return
    try {
      setIsDeleting(true)
      const response = await fetch(`/api/noticias/${id}`, { method: 'DELETE' })
      if (response.ok) {
        setToast({ message: 'Noticia eliminada correctamente', type: 'success' })
        router.refresh()
      } else {
        const data = await response.json()
        setToast({ message: data.message || 'Error al eliminar la noticia', type: 'error' })
      }
    } catch {
      setToast({ message: 'Error de red al eliminar la noticia', type: 'error' })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <tr className="border-b hover:bg-neutral-50 transition-colors">
        <td className="p-4 max-w-40">
          <p className="text-gray-600 line-clamp-2 font-medium">{title}</p>
        </td>
        <td className="p-4 max-w-48">
          <p className="text-gray-500 text-sm line-clamp-2">{content}</p>
        </td>
        <td className="p-4 text-center">
          {imageURL && (
            <Image
              className="mx-auto rounded"
              src={imageURL}
              alt={`Imagen de ${title}`}
              width={80}
              height={80}
              loading="lazy"
            />
          )}
        </td>
        <td className="p-4 text-center space-x-2">
          <button
            type="button"
            onClick={() => router.push(`/admin/noticias/${id}/editar`)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 border border-blue-200 hover:border-blue-400 rounded px-2 py-1 transition-colors"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800 border border-red-200 hover:border-red-400 rounded px-2 py-1 transition-colors disabled:opacity-50"
          >
            {isDeleting ? 'Eliminando...' : 'Eliminar'}
          </button>
        </td>
      </tr>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </>
  )
}
