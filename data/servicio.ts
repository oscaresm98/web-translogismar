'use server'
import { headers } from "next/headers";
import { revalidateTag } from 'next/cache';

export async function getDataServices() {
    const res = await fetch(`${process.env.API_URL}/servicios`, { 
        next: { 
            tags: ['dataServices'],
            // Almacenar en cachÃ© durante 1 hora (3600 segundos)
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
    const myHeaders = await headers();
    const myCookies = myHeaders.get('cookie') as string
    
    try {
        const res = await fetch(`${process.env.API_URL}/servicios/${id}`, {
            method: "PUT",
            body: data,
            headers: {
                'cookie': myCookies
            },
            // Aseguramos que no se use cachÃ© para operaciones de escritura
            cache: 'no-store'
        })
        
        const respuesta = await res.json()
        
        // Revalidamos todos los tags relacionados con servicios para mantener la coherencia
        revalidateTag('dataServices', 'default');
        revalidateTag('services-list', 'default');
        
        return respuesta
    } catch (error) {
        console.error('Error al actualizar el servicio:', error);
        throw new Error('No se pudo actualizar el servicio');
    }
}

export async function deleteService(id: number) {
    const myHeaders = await headers();
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/servicios/${id}`, {
        method: 'DELETE',
        headers: { 'cookie': myCookies },
        cache: 'no-store'
    })
    const respuesta = await res.json()
    revalidateTag('dataServices', 'default')
    return respuesta
}

export async function createService(data: FormData) {
    const myHeaders = await headers();
    const myCookies = myHeaders.get('cookie') as string
    
    try {
        const res = await fetch(`${process.env.API_URL}/servicios`, {
            method: "POST",
            body: data,
            headers: {
                'cookie': myCookies
            },
            // Aseguramos que no se use cachÃ© para operaciones de escritura
            cache: 'no-store'
        })
        
        const respuesta = await res.json()
        
        // Revalidamos todos los tags relacionados con servicios para mantener la coherencia
        revalidateTag('dataServices', 'default');
        revalidateTag('services-list', 'default');
        
        return respuesta
    } catch (error) {
        console.error('Error al crear el servicio:', error);
        throw new Error('No se pudo crear el servicio');
    }
}