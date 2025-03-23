'use client'
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p className="text-2xl text-center mt-5">404 | Página No Encontrada</p>
            <Link className="text-lg block text-blue-800 text-center mt-5" href='/'>Ir a Inicio</Link>
        </div>
    )
}