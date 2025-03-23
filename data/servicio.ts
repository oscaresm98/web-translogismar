'use server'
import { headers } from "next/headers";


export async function getDataServices() {
    const res = await fetch(`${process.env.API_URL}/servicios`, { next: { tags: ['dataServices'] } })
    if (!res.ok) {
        throw new Error('No se pudo cargar la data')
    }
    const data = await res.json()
    return data
}


export async function updateService(data: FormData, id: number) {
    const myHeaders = headers();
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/servicios/${id}`, {
        method: "PUT",
        body: data,
        headers: {
            'cookie': myCookies
        }
    })
    const respuesta = await res.json()
    return respuesta
}

export async function createService(data: FormData) {
    const myHeaders = headers();
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/servicios`, {
        method: "POST",
        body: data,
        headers: {
            'cookie': myCookies
        }
    })
    const respuesta = await res.json()

    return respuesta
}