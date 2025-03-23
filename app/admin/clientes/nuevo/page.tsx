'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import ClientForm from "@/components/admin/clientes/clientForm";
import { useRouter } from "next/navigation";
import { ClientFormType } from "@/interfaces/clientInterface";
import { createClient } from "@/data/clientes";

export default function NewClientPage() {
  // const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const initialValues: ClientFormType = {
    name: "",
    description: "",
    imageURL: ""
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const onSubmit = handleSubmit(async data => {
    setLoading(true)
    const formData = new FormData()
    formData.append("image", data.imageURL[0])
    data = { ...data, "imageURL": "imagePreview" }
    formData.append("recipe", JSON.stringify(data))
    const res = await createClient(formData)
    if (res && Object.keys(res).length > 1) {
      setLoading(false)
      router.push('/admin/clientes')
      router.refresh()
    }
  })

  return (
    <div className="container p-2">
      <h1 className="font-black text-4xl text-[#0230E6] ">Nuevo Cliente</h1>
      <p className="mt-3">A continuación podrás crear un nuevo cliente</p>
      <form
        className="my-4 shadow-lg p-10 rounded-lg"
        onSubmit={onSubmit}
        noValidate
      >

        <ClientForm
          register={register}
          errors={errors}
        />

        <input
          type="submit"
          disabled={loading}
          value={loading ? 'Creando...' : 'Crear Cliente'}
          className="bg-blue-800 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6 disabled:bg-blue-800/50"
        />
      </form>

    </div>
  )
}
