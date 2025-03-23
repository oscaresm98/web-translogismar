'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import EnterpriseInterface from "@/interfaces/enterpriseInterface";
import Image from "next/image";
import ErrorForm from "@/components/error-form";
import logo from '@/public/img/logoMundo.svg'
import { updateEnterprise } from "@/data/nosotros";

export default function FormularioNosotros({ enterprise }: { enterprise: EnterpriseInterface }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()
  const [imagePreview, setImagePreview] = useState<string>(enterprise?.ImageURL);
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
    setLoading(true)
    const formData = new FormData()
    if (data.ImageURL.length) {
      formData.append("image", data.ImageURL[0])
    } else {
      formData.append("image", "")
    }

    data = { ...data, "ImageURL": enterprise?.ImageURL }
    formData.append("recipe", JSON.stringify(data))
    const res = await updateEnterprise(formData, enterprise.id as number)
    if (res && Object.keys(res).length > 1) {
      setLoading(false)
      router.push('/admin/nosotros')
      router.refresh()
    }
  })
  return (
    <form onSubmit={onSubmit} className='my-4'>

      <Image
        src={imagePreview ? imagePreview : logo}
        alt="Imagen previsualización"
        className="mx-auto rounded-lg object-cover border border-blue-300 my-2"
        loading='lazy'
        width={256}
        height={256}
      />
      <input
        type="file"
        id="ImageURL"
        className="block mb-4 w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-[#0230E6] hover:file:bg-sky-100"
        accept="image/jpg,image/jpeg,image/png,image/gif"
        defaultValue={""}
        {...register("ImageURL", {
          required: false

        })}
        onChange={handleImageChange}
      />


      <label htmlFor="descHistory" className="block font-bold text-[#0230E6] uppercase">Descripción Empresa</label>
      {
        errors?.descHistory && (
          <ErrorForm>{errors?.descHistory.message as string}</ErrorForm>
        )
      }
      <textarea
        id="descHistory"
        defaultValue={enterprise?.descHistory}
        className="p-3 block w-full border border-slate-300 rounded-md mb-5 h-48"
        {...register("descHistory", {
          required: {
            value: true,
            message: "La descripción de empresa es requerida"
          }
        })}
      ></textarea>

      <label htmlFor="descMision" className="block font-bold text-[#0230E6] uppercase">Descripción Misión</label>
      {
        errors?.descMision && (
          <ErrorForm>{errors?.descMision.message as string}</ErrorForm>
        )
      }
      <textarea
        id="descMision"
        defaultValue={enterprise?.descMision}
        className="p-3 block w-full border border-slate-300 rounded-md mb-5 h-48"
        {...register("descMision", {
          required: {
            value: true,
            message: "La descripción de la misión es requerida"
          }
        })}
      ></textarea>

      <label htmlFor="descVision" className="block font-bold text-[#0230E6] uppercase">Descripción Visión</label>
      {
        errors?.descVision && (
          <ErrorForm>{errors?.descVision.message as string}</ErrorForm>
        )
      }
      <textarea
        id="descVision"
        defaultValue={enterprise?.descVision}
        className="p-3 block w-full border border-slate-300 rounded-md mb-5 h-48"
        {...register("descVision", {
          required: {
            value: true,
            message: "La descripción de la visión es requerida"
          }
        })}
      ></textarea>

      <label htmlFor="address" className='block font-bold text-[#0230E6] uppercase'>Dirección</label>
      {
        errors?.address && (
          <ErrorForm>{errors?.address.message as string}</ErrorForm>
        )
      }
      <input
        type="text"
        id="address"
        defaultValue={enterprise?.address}
        className='p-3 block w-full border border-slate-300 rounded-md mb-5'
        {...register("address", {
          required: {
            value: true,
            message: "La dirección es requerido"
          }
        })}
      />

      <label htmlFor="phone" className='block font-bold text-[#0230E6] uppercase'>Teléfono</label>
      {
        errors?.phone && (
          <ErrorForm>{errors?.phone.message as string}</ErrorForm>
        )
      }
      <input
        type="number"
        id="phone"
        defaultValue={enterprise?.phone}
        className='p-3 block w-full border border-slate-300 rounded-md mb-5'
        {...register("phone", {
          required: {
            value: true,
            message: "El teléfono es requerido"
          }
        })}
      />

      <label htmlFor="cellphone" className='block font-bold text-[#0230E6] uppercase'>Teléfono Celular</label>
      {
        errors?.cellphone && (
          <ErrorForm>{errors?.cellphone.message as string}</ErrorForm>
        )
      }
      <input
        type="number"
        defaultValue={enterprise?.cellphone}
        id="cellphone"
        className='p-3 block w-full border border-slate-300 rounded-md mb-5'
        {...register("cellphone", {
          required: {
            value: true,
            message: "El teléfono es requerido"
          }
        })}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Actualizando...' : 'Actualizar Nosotros'}
        className="bg-blue-800 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6 disabled:bg-blue-800/50"
      />
    </form>
  )
}
