'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ServiceInterface from '@/interfaces/serviceInterface'
import { deleteService } from '@/data/servicio'
import Toast from '@/components/admin/toast'

export default function Servicio({ service }: { service: ServiceInterface }) {
  const router = useRouter()
  const { name, location, description, imageURL, id } = service
  const [isDeleting, setIsDeleting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleDelete = async () => {
    if (!confirm(`¿Estás seguro de eliminar el servicio "${name}"?`)) return
    try {
      setIsDeleting(true)
      const res = await deleteService(id)
      if (res?.message === 'Servicio eliminado correctamente') {
        setToast({ message: 'Servicio eliminado correctamente', type: 'success' })
        router.refresh()
      } else {
        setToast({ message: res?.message || 'Error al eliminar el servicio', type: 'error' })
      }
    } catch {
      setToast({ message: 'Error de red al eliminar el servicio', type: 'error' })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <tr className="border-b hover:bg-neutral-50 transition-colors">
        <td className="p-4 max-w-28">
          <p className="text-gray-600 line-clamp-2 text-ellipsis">{name}</p>
        </td>
        <td className="p-4 w-4">
          <p className="text-gray-600 line-clamp-2 text-ellipsis">{location}</p>
        </td>
        <td className="p-4 max-w-40">
          <p className="text-gray-600 line-clamp-2 text-ellipsis">{description}</p>
        </td>
        <td className="p-4">
          <Image
            className="mx-auto rounded"
            src={imageURL}
            alt={`imagen de ${name}`}
            width={80}
            height={80}
            loading="lazy"
          />
        </td>
        <td className="p-4 text-center space-x-2">
          <button
            type="button"
            onClick={() => router.push(`/admin/servicios/${id}/editar`)}
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
