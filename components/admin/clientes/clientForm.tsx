import { useState } from "react"
import Image from "next/image"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import ErrorForm from "@/components/error-form"
import { ClientFormType } from "@/interfaces/clientInterface"

type ClientFormProps = {
  register: UseFormRegister<ClientFormType>
  errors: FieldErrors<ClientFormType>
  previewImage?: string;
}

export default function ClientForm({ register, errors, previewImage }: ClientFormProps) {
  const [imagePreview, setImagePreview] = useState<string>(previewImage ?? "/img/logoMundo.svg");

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

  return (
    <>
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
            value: previewImage ? false : true,
            message: "La imagen es requerida"
          }

        })}
        onChange={handleImageChange}
      />

      <Image
        src={imagePreview}
        alt="Imagen previsualización"
        className="mx-auto rounded-lg object-cover border border-blue-300 my-2"
        loading='lazy'
        width={256}
        height={256}
      />
    </>
  )
}
