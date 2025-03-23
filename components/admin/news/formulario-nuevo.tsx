'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ErrorForm from '@/components/error-form'
import logo from '@/public/img/logoMundo.svg'
import { createNew } from '@/data/noticias'
import { useSession } from 'next-auth/react'

export default function FormularioNoticia() {
  const { data: session } = useSession()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const router = useRouter()
  const [imagePreview, setImagePreview] = useState<string>("/img/logoMundo.svg")
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      if (file) {
        reader.readAsDataURL(file)
      }
    }
  }

  const onSubmit = handleSubmit(async data => {

    setLoading(true)

    const formData = new FormData()
    formData.append("image", data.imageURL[0])
    formData.append("user", session?.user?.email as string)
    // Se reemplaza imageURL por la previsualización (puedes ajustar según tu lógica)
    data = { ...data, "imageURL": imagePreview }
    formData.append("recipe", JSON.stringify(data))
    const res = await createNew(formData)
    if (res && Object.keys(res).length > 1) {
      setLoading(false)
      router.push('/admin/noticias')
      router.refresh()
    }
  })

  return (
    <form onSubmit={onSubmit} className='my-4'>
      <label htmlFor="title" className='block font-bold text-[#0230E6] uppercase'>Título</label>
      {errors?.title && (
        <ErrorForm>{errors?.title.message as string}</ErrorForm>
      )}
      <input
        type="text"
        id="title"
        className='p-3 block w-full border border-slate-300 rounded-md mb-5'
        {...register("title", {
          required: {
            value: true,
            message: "El título es requerido"
          }
        })}
      />

      <label htmlFor="content" className='block font-bold text-[#0230E6] uppercase'>Contenido</label>
      {errors?.content && (
        <ErrorForm>{errors?.content.message as string}</ErrorForm>
      )}
      <textarea
        id="content"
        className='p-3 block w-full border border-slate-300 rounded-md mb-5 h-48'
        {...register("content", {
          required: {
            value: true,
            message: "El contenido es requerido"
          }
        })}
      ></textarea>

      {errors?.imageURL && (
        <ErrorForm>{errors?.imageURL.message as string}</ErrorForm>
      )}
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
        value={loading ? 'Creando...' : 'Crear Noticia'}
        className="bg-blue-800 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6 disabled:bg-blue-800/50"
      />
    </form>
  )
}
