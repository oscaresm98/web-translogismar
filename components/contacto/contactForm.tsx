'use client'
import ImageEffect from '@/components/effects/image-effect'
import { Fragment, useState } from 'react';

export default function ContactoForm() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('enviando');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = {
      nombre: (form.nombre as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      telefono: (form.telefono as HTMLInputElement).value,
      mensaje: (form.mensaje as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const err = await res.json();
        // Si err es un objeto, mostrar solo el mensaje
        let msg = 'Error al enviar el mensaje';
        if (typeof err === 'string') msg = err;
        else if (err?.message) msg = err.message;
        setErrorMsg(msg);
        setStatus('error');
      }
    } catch (err: any) {
      setErrorMsg('Error al enviar el mensaje');
      setStatus('error');
    }
  };

  return (
    <main className="max-w-5xl mx-auto p-4 md:p-0">
        <h1 className="text-5xl my-12 font-bold text-prima text-center">Contacto</h1>
        <ImageEffect
          url="/img/camion.jpg"
          alternative='imagen de contacto'
        />

        <h2 className="text-4xl mt-12 text-center">Llene el Formulario de Contacto</h2>
        <span className="block h-[3px] w-52 bg-slate-500 mx-auto mt-3"></span>
        <form onSubmit={handleSubmit} className="mt-12">

          <label htmlFor="nombre" className='block font-bold uppercase'>Nombre</label>
          <input type="text" id="nombre" name="nombre" className='p-3 block w-full border border-slate-300 rounded-md mb-5' required />

          <label htmlFor="email" className='block font-bold uppercase'>E-mail</label>
          <input type="email" id="email" name="email" className='p-3 block w-full border border-slate-300 rounded-md mb-5' required />

          <label htmlFor="telefono" className='block font-bold uppercase'>Teléfono</label>
          <input type="tel" id="telefono" name="telefono" className='p-3 block w-full border border-slate-300 rounded-md mb-5' required />

          <label htmlFor="mensaje" className='block font-bold uppercase'>Mensaje</label>
          <textarea id="mensaje" name="mensaje" className='p-3 block w-full border border-slate-300 rounded-md mb-5 h-52' required></textarea>

          <input
              type="submit"
              className="bg-secun p-3 w-full md:w-40 text-white uppercase font-bold hover:bg-[#0230E6] cursor-pointer transition-colors rounded-md"
              value={status === 'enviando' ? 'Enviando...' : 'Enviar'}
              disabled={status === 'enviando'}
          />
        </form>
        {status === 'success' && (
          <p className="text-green-600 text-center mt-4 font-bold">¡Mensaje enviado correctamente!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center mt-4 font-bold">{errorMsg}</p>
        )}
      </main>
  )
}
