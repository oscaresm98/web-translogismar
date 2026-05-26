'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import NewsInterface from '@/interfaces/newsInterface'

interface NewsSectionProps {
  news: NewsInterface[]
}

function readingTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(' ').length / 200))
}

function smartExcerpt(content: string, words = 25): string {
  const parts = content.split(' ')
  if (parts.length <= words) return content
  return parts.slice(0, words).join(' ') + '…'
}

function formatDate(dateString?: Date): string {
  if (!dateString) return ''
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function NewsSection({ news }: NewsSectionProps) {
  const [selectedNews, setSelectedNews] = useState<NewsInterface | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [readingProgress, setReadingProgress] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)

  // Abrir modal
  const openModal = useCallback((item: NewsInterface) => {
    const index = news.findIndex(n => n.id === item.id)
    setCurrentIndex(index)
    setSelectedNews(item)
    setReadingProgress(0)
    document.body.style.overflow = 'hidden'
  }, [news])

  // Disparar la animación de entrada tras montar el modal
  useEffect(() => {
    if (selectedNews) {
      requestAnimationFrame(() => setModalOpen(true))
    }
  }, [selectedNews])

  // Cerrar modal
  const closeModal = useCallback(() => {
    setModalOpen(false)
    document.body.style.overflow = 'unset'
    setTimeout(() => {
      setSelectedNews(null)
      setReadingProgress(0)
    }, 300)
  }, [])

  // Navegar entre noticias
  const navigateNews = useCallback((direction: 'prev' | 'next') => {
    if (currentIndex === -1) return
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % news.length
        : (currentIndex - 1 + news.length) % news.length
    setModalOpen(false)
    setReadingProgress(0)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setSelectedNews(news[newIndex])
    }, 280)
  }, [currentIndex, news])

  // Teclado: Escape, flechas
  useEffect(() => {
    if (!selectedNews) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') navigateNews('next')
      if (e.key === 'ArrowLeft') navigateNews('prev')
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedNews, closeModal, navigateNews])

  // Barra de progreso de lectura
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return
    const total = el.scrollHeight - el.clientHeight
    if (total <= 0) return
    setReadingProgress((el.scrollTop / total) * 100)
  }, [])

  // Swipe táctil para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) navigateNews(diff > 0 ? 'next' : 'prev')
  }

  // Estado vacío
  if (news.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a4 4 0 0 1-4 4z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
          </svg>
        </div>
        <p className="text-neutral-500 text-lg font-medium">No hay noticias disponibles</p>
        <p className="text-neutral-400 text-sm mt-1">Vuelve pronto para ver las últimas novedades.</p>
      </div>
    )
  }

  const [featured, ...rest] = news

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: news.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'NewsArticle',
                headline: item.title,
                image: item.imageURL,
                articleBody: item.content,
              },
            })),
          }),
        }}
      />

      {/* ── Artículo destacado ── */}
      <article
        className="news-hero-card group relative overflow-hidden rounded-2xl cursor-pointer mb-10 h-[420px] md:h-[500px]"
        onClick={() => openModal(featured)}
      >
        <Image
          src={featured.imageURL || '/placeholder.png'}
          alt={featured.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />
        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111d27] via-[#233343]/50 to-transparent" />

        {/* Badge destacado */}
        <div className="absolute top-5 left-5">
          <span className="bg-prima text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
            Destacado
          </span>
        </div>

        {/* Contenido inferior */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-3">
            {featured.publishedAt && (
              <span className="text-white/70 text-sm">{formatDate(featured.publishedAt)}</span>
            )}
            <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
            <span className="text-white/70 text-sm">{readingTime(featured.content)} min lectura</span>
          </div>
          <h2 className="news-title text-white text-2xl md:text-4xl font-bold leading-tight mb-3 max-w-3xl">
            {featured.title}
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl hidden md:block">
            {smartExcerpt(featured.content, 30)}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-prima font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            Leer artículo
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>

      {/* ── Grid de noticias ── */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((item, index) => (
            <article
              key={item.id}
              className="news-card group bg-white rounded-xl overflow-hidden cursor-pointer border border-neutral-100 news-card-animation"
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => openModal(item)}
            >
              {/* Franja accent */}
              <div className="h-[3px] bg-prima" />

              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.imageURL || '/placeholder.png'}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-prima/10 transition-colors duration-300" />
                {item.publishedAt && (
                  <div className="news-date-badge">{formatDate(item.publishedAt)}</div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-5">
                <h2 className="news-title text-secun text-lg font-bold leading-snug line-clamp-2 mb-2">
                  {item.title}
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                  {smartExcerpt(item.content, 25)}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
                  <span className="text-neutral-400 text-xs">{readingTime(item.content)} min lectura</span>
                  <span className="text-prima text-xs font-semibold group-hover:underline">Leer más →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ── Modal ── */}
      {selectedNews && (
        <div
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${
            modalOpen ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'
          }`}
        >
          <div
            onClick={e => e.stopPropagation()}
            className={`relative bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl transition-all duration-300 ${
              modalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Barra de progreso de lectura — fija en la parte superior */}
            <div className="reading-progress-container">
              <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }} />
            </div>

            {/* Botón cerrar */}
            <button onClick={closeModal} className="modal-close-button" aria-label="Cerrar">
              <CloseIcon />
            </button>

            {/* Imagen con botones de navegación */}
            <div className="relative h-56 md:h-72 flex-shrink-0">
              <Image
                src={selectedNews.imageURL || '/placeholder.png'}
                alt={selectedNews.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111d27]/85 to-transparent" />

              {/* Navegación */}
              <button
                onClick={e => { e.stopPropagation(); navigateNews('prev') }}
                className="modal-nav-button modal-nav-prev"
                aria-label="Noticia anterior"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={e => { e.stopPropagation(); navigateNews('next') }}
                className="modal-nav-button modal-nav-next"
                aria-label="Siguiente noticia"
              >
                <ChevronRight />
              </button>

              {/* Título sobre imagen */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <div className="flex items-center gap-3 mb-2">
                  {selectedNews.publishedAt && (
                    <span className="text-white/75 text-sm">{formatDate(selectedNews.publishedAt)}</span>
                  )}
                  <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
                  <span className="text-white/75 text-sm">{readingTime(selectedNews.content)} min lectura</span>
                </div>
                <h2 className="news-title text-white text-xl md:text-2xl font-bold leading-tight">
                  {selectedNews.title}
                </h2>
              </div>
            </div>

            {/* Contenido con scroll */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="overflow-y-auto flex-1 custom-scrollbar"
            >
              <article className="p-6 md:p-8 prose prose-lg max-w-none prose-headings:text-secun prose-p:text-neutral-700 prose-p:leading-relaxed modal-content-animation">
                {selectedNews.content
                  .split('\n')
                  .filter(Boolean)
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
              </article>
            </div>

            {/* Pie del modal */}
            <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between text-xs text-neutral-400 flex-shrink-0">
              <span className="font-medium">{currentIndex + 1} / {news.length}</span>
              <span className="hidden md:inline">← → para navegar · Esc para cerrar</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
