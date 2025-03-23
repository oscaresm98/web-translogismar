'use client'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ErrorForm from "@/components/error-form";

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async data => {
    if (data.password !== data.confirmPassword) {
      return alert("La contraseñas no coinciden")
    }
    const res = await fetch('/api/auth/register', {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        rol: data.rol,
        password: data.password
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (res.ok) router.push('/auth/login')
    else {
      setError("email", {
        message: "El email ya existe"
      })
    }

  })

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col max-w-2xl mx-auto my-12 justify-center p-2">
        <h1 className="text-5xl font-light text-center text-orange-600">Registro de Usuario</h1>

        <input
          className="p-2 border border-gray-200 rounded-md mt-6"
          type="text"
          placeholder="Ingrese nombre"
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es un campo es requerido'
            }
          })}
        />
        {
          errors?.name && (
            <ErrorForm>{errors?.name.message as string}</ErrorForm>
          )
        }

        <input
          className="p-2 border border-gray-200 rounded-md mt-6"
          type="email"
          placeholder="Ingrese email"
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

        <input
          className="p-2 border border-gray-200 rounded-md mt-6"
          type="password"
          placeholder="Confirme Contraseña"
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Este campo es requerido'
            },
            minLength: {
              value: 8,
              message: 'Debe tener al menos 8 caracteres'
            }
          })}
        />
        {
          errors?.confirmPassword && (
            <ErrorForm>{errors?.confirmPassword.message as string}</ErrorForm>
          )
        }

        <select
          id="rol"
          className="p-2 border border-gray-200 rounded-md mt-6"
          {...register('rol', {
            required: {
              value: true,
              message: 'El rol es un campo es requerido'
            }
          })}
        >
          <option value="">--Seleccione Rol--</option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
        {
          errors?.rol && (
            <ErrorForm>{errors?.rol.message as string}</ErrorForm>
          )
        }

        <input type="submit" value="Crear Usuario" className="bg-blue-800 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6" />
      </form>
    </div>
  )
}
