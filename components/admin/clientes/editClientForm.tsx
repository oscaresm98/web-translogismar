'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ClientForm from "./clientForm";
import { updateClient } from "@/data/clientes";
import { ClientFormType } from "@/interfaces/clientInterface";


type EditClientFormProps = {
  client: ClientFormType
  idClient: number
}

export default function EditClientForm({client, idClient}: EditClientFormProps) {
  
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const initialValues: ClientFormType = {
    name: client.name,
    description: client.description,
    imageURL: client.imageURL
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const onSubmit = handleSubmit(async data => {
    setLoading(true)
    const formData = new FormData()
    if (data.imageURL.length == 1) {
      formData.append("image", data.imageURL[0])
    } else {
      formData.append("image", "")
    }

    data = { ...data, "imageURL": client?.imageURL }
    formData.append("recipe", JSON.stringify(data))
    const res = await updateClient(formData, idClient)
    if (res && Object.keys(res).length > 1) {
      setLoading(false)
      router.push('/admin/clientes')
      router.refresh()
    }

  })

  return (
    <form
        className="my-4 shadow-lg p-10 rounded-lg"
        onSubmit={onSubmit}
        noValidate
      >

        <ClientForm
          register={register}
          errors={errors}
          previewImage={client.imageURL}
        />

        <input
          type="submit"
          disabled={loading}
          value={loading ? 'Actualizando...' : 'Actualizar Cliente'}
          className="bg-blue-800 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6 disabled:bg-blue-800/50"
        />
      </form>
  )
}
