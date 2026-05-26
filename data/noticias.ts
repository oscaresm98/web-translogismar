'use server'
import { headers } from "next/headers";
import { revalidateTag } from 'next/cache';

export async function getDataNews() {
    const res = await fetch(`${process.env.API_URL}/noticias`, { 
        next: { 
            tags: ['dataNews'],
            // Almacenar en cachÃ© durante 3 horas para noticias
            revalidate: 10800
        } 
    })
    if (!res.ok) {
        throw new Error('No se pudo cargar la data')
    }
    const data = await res.json()
    return data
}


export async function updateNew(data: FormData, id: number) {
    const myHeaders = await headers();
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/noticias/${id}`, {
        method: "PUT",
        body: data,
        headers: {
            'cookie': myCookies
        },
        cache: 'no-store'
    })
    const respuesta = await res.json()
    
    // Revalidar el cachÃ© despuÃ©s de actualizar
    revalidateTag('dataNews', 'default');
    
    return respuesta
}

export async function createNew(data: FormData) {
    const myHeaders = await headers();
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/noticias`, {
        method: "POST",
        body: data,
        headers: {
            'cookie': myCookies
        },
        cache: 'no-store'
    })
    const respuesta = await res.json()
    
    // Revalidar el cachÃ© despuÃ©s de crear
    revalidateTag('dataNews', 'default');
    
    return respuesta
}