'use client'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/auth/login' })}
      className="uppercase text-secun font-bold text-sm p-2 transition duration-300 delay-100 hover:text-prima cursor-pointer"
    >
      Cerrar Sesión
    </button>
  )
}
