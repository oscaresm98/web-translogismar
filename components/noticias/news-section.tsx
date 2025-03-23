'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NewsInterface from '@/interfaces/newsInterface'

interface NewsSectionProps {
  news: NewsInterface[]
}

export default function NewsSection({ news }: NewsSectionProps) {
  const [selectedNews, setSelectedNews] = useState<NewsInterface | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Cuando se selecciona una noticia, activa la transición de apertura
  useEffect(() => {
    if (selectedNews) {
      setModalOpen(true)
    }
  }, [selectedNews])

  const closeModal = () => {
    // Inicia la animación de salida
    setModalOpen(false)
    // Después de 400ms (duración de la transición), desmonta el modal
    setTimeout(() => {
      setSelectedNews(null)
    }, 400)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid responsive: 1 columna en móvil, 2 en tablet y 3 en escritorio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:opacity-95 cursor-pointer overflow-hidden"
            onClick={() => setSelectedNews(item)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={item.imageURL || '/placeholder.png'} 
                alt={`Imagen de ${item.title}`} 
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              {/* Capa de atenuación */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-secun line-clamp-2">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600 line-clamp-3">
                {item.content.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para visualizar la noticia completa */}
      {selectedNews && (
        <div 
          onClick={closeModal} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className={`bg-white rounded-lg p-6 relative max-w-3xl w-full mx-4 transform transition-all duration-400 ease-out ${
              modalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image 
                src={selectedNews.imageURL || '/placeholder.png'} 
                alt={`Imagen de ${selectedNews.title}`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-secun">
              {selectedNews.title}
            </h2>
            <div className="mt-2 text-gray-700 whitespace-pre-wrap">
              {selectedNews.content}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
