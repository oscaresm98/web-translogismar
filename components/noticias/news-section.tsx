'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import NewsInterface from '@/interfaces/newsInterface'

interface NewsSectionProps {
  news: NewsInterface[]
}

export default function NewsSection({ news }: NewsSectionProps) {
  const [selectedNews, setSelectedNews] = useState<NewsInterface | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Cuando se selecciona una noticia, activa la transición de apertura
  useEffect(() => {
    if (selectedNews) {
      const index = news.findIndex(item => item.id === selectedNews.id);
      setCurrentIndex(index);
      setModalOpen(true)
      // Bloquear el scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // Restablecer el scroll del body cuando se desmonta
      document.body.style.overflow = 'unset';
    }
  }, [selectedNews, news])

  const closeModal = () => {
    // Inicia la animación de salida
    setModalOpen(false)
    // Después de 400ms (duración de la transición), desmonta el modal
    setTimeout(() => {
      setSelectedNews(null)
    }, 400)
    // Restablecer el scroll del body
    document.body.style.overflow = 'unset';
  }

  const navigateNews = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % news.length 
      : (currentIndex - 1 + news.length) % news.length;
    
    setModalOpen(false);
    setTimeout(() => {
      setSelectedNews(news[newIndex]);
      setModalOpen(true);
    }, 300);
  }

  // Formato de fecha
  const formatDate = (dateString?: Date) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Función para actualizar la barra de progreso de lectura
  const updateReadingProgress = () => {
    const scrollElement = scrollContainerRef.current;
    if (!scrollElement) return;
    
    const totalHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    const progress = (scrollElement.scrollTop / totalHeight) * 100;
    
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  };

  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    if (modalOpen && scrollElement) {
      scrollElement.addEventListener('scroll', updateReadingProgress);
      // Inicializar la barra de progreso
      updateReadingProgress();
      
      return () => {
        scrollElement.removeEventListener('scroll', updateReadingProgress);
      };
    }
  }, [modalOpen]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Schema.org markup para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": news.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "NewsArticle",
                "headline": item.title,
                "image": item.imageURL,
                "articleBody": item.content
              }
            }))
          })
        }}
      />

      {/* Grid responsive: 1 columna en móvil, 2 en tablet y 3 en escritorio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:opacity-95 cursor-pointer overflow-hidden news-card-animation news-card"
            onClick={() => setSelectedNews(item)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-48 overflow-hidden image-container">
              <Image 
                src={item.imageURL || '/placeholder.png'} 
                alt={`Imagen de ${item.title}`} 
                fill
                className="object-cover transition-transform duration-300 ease-in-out"
              />
              {/* Capa de atenuación */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
              
              {/* Badge de fecha */}
              {item.publishedAt && (
                <div className="news-date-badge">
                  {formatDate(item.publishedAt)}
                </div>
              )}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto py-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className={`bg-white rounded-lg relative max-w-3xl w-full mx-4 my-8 transform transition-all duration-400 ease-out ${
              modalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <button
              onClick={closeModal}
              className="modal-close-button"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Botones de navegación */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateNews('prev');
              }}
              className="modal-nav-button left-0 ml-2"
              aria-label="Noticia anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateNews('next');
              }}
              className="modal-nav-button right-0 mr-2"
              aria-label="Siguiente noticia"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <Image 
                src={selectedNews.imageURL || '/placeholder.png'} 
                alt={`Imagen de ${selectedNews.title}`}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay para texto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedNews.title}
                </h2>
                {selectedNews.publishedAt && (
                  <p className="text-white/90 text-sm mt-1">
                    {formatDate(selectedNews.publishedAt)}
                  </p>
                )}
              </div>
            </div>
            
            {/* Contenedor con scroll para el contenido */}
            <div 
              ref={scrollContainerRef}
              className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar"
            >
              <h2 className="text-2xl font-bold text-secun mb-4 md:hidden">
                {selectedNews.title}
              </h2>
              <article className="prose prose-lg max-w-none prose-headings:text-secun prose-a:text-blue-600 modal-content-animation">
                {selectedNews.content.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="my-4">{paragraph}</p>
                ))}
              </article>
              
              {/* Indicador de progreso de lectura */}
              <div className="reading-progress-container">
                <div className="reading-progress-bar" id="reading-progress"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
