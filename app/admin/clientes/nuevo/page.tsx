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
  const [imagePreview, setImagePreview] = useState<string>("/img/logoMundo.svg")
  const router = useRouter()
  const initialValues: ClientFormType = {
    name: "",
    description: "",
    imageURL: ""
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

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
    try {
      setLoading(true)
      const formData = new FormData()
      
      // Asegurarse de que la imagen esté correctamente adjuntada al FormData
      if (data.imageURL && data.imageURL[0]) {
        formData.append("image", data.imageURL[0])
      }
      
      // Copiar los datos sin modificar imageURL para mantener la estructura que espera el backend
      const clientData = {
        name: data.name,
        description: data.description
      }
      
      formData.append("client", JSON.stringify(clientData))
      
      const res = await createClient(formData)
      
      if (res && Object.keys(res).length > 1) {
        setLoading(false)
        router.push('/admin/clientes')
        router.refresh()
      } else {
        setLoading(false)
        alert("Ocurrió un error al crear el cliente")
        console.error("Error en la respuesta:", res)
      }
    } catch (error) {
      setLoading(false)
      console.error("Error al enviar el formulario:", error)
      alert("Ocurrió un error al crear el cliente")
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
          previewImage={imagePreview}
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
