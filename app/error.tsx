'use client'
import Link from "next/link"

export default function Error() {
    return (
        <div className="text-2xl text-center mt-14">
            <p>404 | Página No Encontrada</p>
            <Link className="text-lg block text-orange-700" href='/'>Ir a Inicio</Link>
        </div>
    )
}