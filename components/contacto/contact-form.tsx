'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [status, setStatus] = useState<'idle' | 'enviando' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('enviando')
    setErrorMsg('')
    
    const form = e.currentTarget
    const data = {
      nombre: (form.nombre as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      telefono: (form.telefono as HTMLInputElement).value,
      mensaje: (form.mensaje as HTMLTextAreaElement).value,
    }
    
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setStatus('success')
        form.reset()
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
        })
      } else {
        const err = await res.json()
        // Si err es un objeto, mostrar solo el mensaje
        let msg = 'Error al enviar el mensaje'
        if (typeof err === 'string') msg = err
        else if (err?.message) msg = err.message
        setErrorMsg(msg)
        setStatus('error')
      }
    } catch (err: any) {
      console.error('Error:', err)
      setErrorMsg('Error de conexión. Por favor, inténtalo de nuevo.')
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="space-y-6">
      {/* Success/Error Messages */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-green-700">¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p className="text-red-700">{errorMsg || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="nombre" className="block text-sm font-semibold text-dark-700 uppercase tracking-wide">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-dark-800 placeholder:text-neutral-500"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="telefono" className="block text-sm font-semibold text-dark-700 uppercase tracking-wide">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="0958989766"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-dark-800 placeholder:text-neutral-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-dark-700 uppercase tracking-wide">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="tu@email.com"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-dark-800 placeholder:text-neutral-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className="block text-sm font-semibold text-dark-700 uppercase tracking-wide">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-dark-800 placeholder:text-neutral-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'enviando'}
        className="w-full md:w-auto btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'enviando' ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
      </form>
    </div>
  )
}