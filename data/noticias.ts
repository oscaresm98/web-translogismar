'use server'
import { headers } from "next/headers";

const myHeaders = headers();

export async function getDataNews() {
    const res = await fetch(`${process.env.API_URL}/noticias`, { next: { tags: ['dataNews'] } })
    if (!res.ok) {
        throw new Error('No se pudo cargar la data')
    }
    const data = await res.json()
    return data
}


export async function updateNew(data: FormData, id: number) {
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/noticias/${id}`, {
        method: "PUT",
        body: data,
        headers: {
            'cookie': myCookies
        }
    })
    const respuesta = await res.json()
    console.log(respuesta)
    return respuesta
}

export async function createNew(data: FormData) {
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/noticias`, {
        method: "POST",
        body: data,
        headers: {
            'cookie': myCookies
        }
    })
    const respuesta = await res.json()

    return respuesta
}