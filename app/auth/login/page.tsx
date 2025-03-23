'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import ErrorForm from "@/components/error-form";
import logo from "@/public/img/logo.svg"

export default function LoginPage() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const router = useRouter();
  const [error, setError] = useState<String>()

  const onSubmit = handleSubmit(async data => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })
    if (!res?.ok) {
      setError(res?.error ?? 'error')
    } else {
      router.push('/admin')
    }

  })
  return (
    <form onSubmit={onSubmit} className="flex flex-col max-w-2xl mx-auto my-12 justify-center p-2">
      
      <Image src={logo} alt="imagen logo" className="mx-auto" loading="lazy"/>
      <h1 className="text-5xl mt-7 font-bold text-center text-prima">Ingreso de Usuario</h1>
      {
        error && (
          <p className="bg-red-500 text-white font-bold p-2 text-center mt-2">{error}</p>
        )
      }

      <input
        className="p-2 border border-gray-200 rounded-md mt-6"
        type="email"
        placeholder="Ingrese su email"
        {...register('email', {
          required: {
            value: true,
            message: 'El email es un campo es requerido'
          }
        })}
      />
      {
        errors?.email && (
          <ErrorForm>{errors?.email.message as string}</ErrorForm>
        )
      }

      <input
        className="p-2 border border-gray-200 rounded-md mt-6"
        type="password"
        placeholder="Ingrese contraseña"
        {...register('password', {
          required: {
            value: true,
            message: 'La contraseña es un campo requerido'
          },
          minLength: {
            value: 8,
            message: 'Debe tener al menos 8 caracteres'
          }
        })}
      />
      {
        errors?.password && (
          <ErrorForm>{errors?.password.message as string}</ErrorForm>
        )
      }

      <input type="submit" value="Ingresar" className="bg-blue-900 transition duration-300 delay-150 hover:bg-blue-800 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6" />
    </form>
  )
}
