'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ErrorForm from '@/components/error-form';
import ServiceInterface from '@/interfaces/serviceInterface';
import logo from '@/public/img/logoMundo.svg'
import { updateService } from '@/data/servicio';

export default function FormularioServicios({ service }: { service: ServiceInterface }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()
  const [imagePreview, setImagePreview] = useState<string>(service?.imageURL);
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
      
      // Manejar la imagen correctamente
      if (data.imageURL && data.imageURL.length) {
        formData.append("image", data.imageURL[0])
      } else {
        formData.append("image", "")
      }

      // Crear un objeto con los datos del servicio sin modificar imageURL
      const serviceData = {
        name: data.name,
        description: data.description,
        location: data.location,
        phrase: data.phrase,
        imageURL: service?.imageURL // Mantener la URL de imagen actual si no se sube una nueva
      }
      
      formData.append("recipe", JSON.stringify(serviceData))
      
      const res = await updateService(formData, service.id)
      
      if (res && Object.keys(res).length > 1) {
        setLoading(false)
        
        // Recargar la página y redirigir
        router.refresh() 
        router.push('/admin/servicios')
      } else {
        setLoading(false)
        alert("Ocurrió un error al actualizar el servicio")
        console.error("Error en la respuesta:", res)
      }
    } catch (error) {
      setLoading(false)
      console.error("Error al enviar el formulario:", error)
      alert("Ocurrió un error al actualizar el servicio")
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
        defaultValue={service?.name}
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
        defaultValue={service?.location}
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
        defaultValue={service?.phrase}
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
        defaultValue={service?.description}
        id="description"
        className="p-3 block w-full border border-slate-300 rounded-md mb-5 h-48"
        {...register("description", {
          required: {
            value: true,
            message: "La descripción es requerida"
          }
        })}
      ></textarea>

      <input
        type="file"
        id="imageURL"
        className="block w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-[#0230E6] hover:file:bg-sky-100"
        accept="image/jpg,image/jpeg,image/png,image/gif,image/webp"
        defaultValue={""}
        {...register("imageURL", {
          required: false
        })}
        onChange={handleImageChange}
      />

      <div className="mt-4 mb-6 flex flex-col items-center">
        <p className="text-sm text-gray-500 mb-2">Vista previa de la imagen:</p>
        <Image
          src={imagePreview ? imagePreview : logo}
          alt="Imagen previsualización"
          className="rounded-lg object-cover border border-blue-300 my-2"
          loading='lazy'
          width={256}
          height={256}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjY2NjIi8+PC9zdmc+"
        />
      </div>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Actualizando...' : 'Actualizar Servicio'}
        className="bg-blue-800 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6 disabled:bg-blue-800/50"
      />
    </form>
  )
}
