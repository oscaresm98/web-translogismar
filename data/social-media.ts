'use server'
import { headers } from "next/headers";


export async function getSocialMediasAdmin() {
    const res = await fetch(`${process.env.API_URL}/sociales`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('No se pudo cargar la data')
    }
    const data = await res.json()
    return data;
}

export async function getSocialMedias() {
    const res = await fetch(`${process.env.API_URL}/sociales`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('No se pudo cargar la data')
    }
    const data = await res.json()
    return data;
}

export async function createSocialMedias(data: any) {
    const myHeaders = headers();
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/sociales`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'cookie': myCookies,
            'Content-Type': "application/json"
        }
    })
    const respuesta = await res.json()
    return respuesta
}