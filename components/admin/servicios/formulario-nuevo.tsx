'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ErrorForm from '@/components/error-form';
import logo from '@/public/img/logoMundo.svg'
import { createService } from '@/data/servicio';
import { useSession } from 'next-auth/react';

export default function FormularioNuevo() {
  const { data: session, status } = useSession()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()
  const [imagePreview, setImagePreview] = useState<string>("/img/logoMundo.svg");
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      }
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  const onSubmit = handleSubmit(async data => {
    try {
      setLoading(true)
      const formData = new FormData()
      
      // Asegurarse de que la imagen esté correctamente adjuntada al FormData
      if (data.imageURL && data.imageURL[0]) {
        formData.append("image", data.imageURL[0])
      }
      
      formData.append("user", session?.user?.email as string)
      
      // No sobreescribir imageURL con una cadena fija "imagePreview"
      // Solo enviar los datos necesarios sin modificar imageURL
      const serviceData = {
        name: data.name,
        description: data.description,
        location: data.location,
        phrase: data.phrase
      }
      
      formData.append("recipe", JSON.stringify(serviceData))
      
      const res = await createService(formData)
      
      if (res && Object.keys(res).length > 1) {
        setLoading(false)
        router.push('/admin/servicios')
        router.refresh()
      } else {
        setLoading(false)
        alert("Ocurrió un error al crear el servicio")
        console.error("Error en la respuesta:", res)
      }
    } catch (error) {
      setLoading(false)
      console.error("Error al enviar el formulario:", error)
      alert("Ocurrió un error al crear el servicio")
    }
  })
  
  return (
    <form onSubmit={onSubmit} className='my-4'>
      <label htmlFor="name" className='block font-bold text-[#0230E6] uppercase'>Nombre</label>
      {
        errors?.name && (
          <ErrorForm>{errors?.name.message as string}</ErrorForm>
        )
      }
      <input
        type="text"
        id="name"
        className='p-3 block w-full border border-slate-300 rounded-md mb-5'
        {...register("name", {
          required: {
            value: true,
            message: "El nombre es requerido"
          }
        })}
      />

      <label htmlFor="location" className='block font-bold text-[#0230E6] uppercase'>Ubicación</label>
      {
        errors?.location && (
          <ErrorForm>{errors?.location.message as string}</ErrorForm>
        )
      }
      <input
        type="text"
        id="location"
        className='p-3 block w-full border border-slate-300 rounded-md mb-5'
        {...register("location", {
          required: {
            value: true,
            message: "La ubicación es requerida"
          }
        })}
      />

      <label htmlFor="phrase" className='block font-bold text-[#0230E6] uppercase'>Descripción Corta</label>
      {
        errors?.phrase && (
          <ErrorForm>{errors?.phrase.message as string}</ErrorForm>
        )
      }
      <input
        type="text"
        id="phrase"
        className='p-3 block w-full border border-slate-300 rounded-md mb-5'
        {...register("phrase", {
          required: {
            value: true,
            message: "La descripción corta es requerida"
          }
        })}
      />

      <label htmlFor="description" className="block font-bold text-[#0230E6] uppercase">Descripción</label>
      {
        errors?.description && (
          <ErrorForm>{errors?.description.message as string}</ErrorForm>
        )
      }
      <textarea
        id="description"
        className="p-3 block w-full border border-slate-300 rounded-md mb-5 h-48"
        {...register("description", {
          required: {
            value: true,
            message: "La descripción es requerida"
          }
        })}
      ></textarea>

      {
        errors?.imageURL && (
          <ErrorForm>{errors?.imageURL.message as string}</ErrorForm>
        )
      }
      <input
        type="file"
        id="imageURL"
        className="block w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-[#0230E6] hover:file:bg-sky-100"
        accept="image/jpg,image/jpeg,image/png,image/gif"
        defaultValue={""}
        {...register("imageURL", {
          required: {
            value: true,
            message: "La imagen es requerida"
          }
        })}
        onChange={handleImageChange}
      />

      <Image
        src={imagePreview ? imagePreview : logo}
        alt="Imagen previsualización"
        className="mx-auto rounded-lg object-cover border border-blue-300 my-2"
        loading='lazy'
        width={256}
        height={256}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Creando...' : 'Crear Servicio'}
        className="bg-blue-800 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6 disabled:bg-blue-800/50"
      />
    </form>
  )
}
