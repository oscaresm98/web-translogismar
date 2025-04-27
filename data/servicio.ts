'use server'
import { headers } from "next/headers";
import { revalidateTag } from 'next/cache';

export async function getDataServices() {
    const res = await fetch(`${process.env.API_URL}/servicios`, { 
        next: { 
            tags: ['dataServices'],
            // Almacenar en caché durante 1 hora (3600 segundos)
            revalidate: 3600 
        } 
    })
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
        },
        // Aseguramos que no se use caché para operaciones de escritura
        cache: 'no-store'
    })
    const respuesta = await res.json()
    
    // Revalidar el caché después de actualizar
    revalidateTag('dataServices');
    
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
        },
        // Aseguramos que no se use caché para operaciones de escritura
        cache: 'no-store'
    })
    const respuesta = await res.json()
    
    // Revalidar el caché después de crear
    revalidateTag('dataServices');
    
    return respuesta
}