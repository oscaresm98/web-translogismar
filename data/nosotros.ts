'use server'
import { headers } from "next/headers";



export async function getEnterprises() {
    try {
        const res = await fetch(`${process.env.API_URL}/nosotros`, { next: { tags: ['dataEnterprises'] } })
        if (!res.ok) {
            throw new Error('No se pudo cargar la data')
        }
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error);
    }

}

export async function getEnterprise(id: number) {
    try {
        const res = await fetch(`${process.env.API_URL}/nosotros/${id}`, {
            method: "GET",
            next: { tags: ['dataEnterprise'] }
        })
        if (!res.ok) {
            throw new Error('No se pudo cargar la data')
        }
        const data = await res.json()
        return data
    } catch (error: any) {
        return { error: { message: error?.message } };
    }
}

export async function updateEnterprise(data: FormData, id: number) {
    const myHeaders = headers();
    const myCookies = myHeaders.get('cookie') as string
    const res = await fetch(`${process.env.API_URL}/nosotros/${id}`, {
        method: "PUT",
        body: data,
        headers: {
            'cookie': myCookies
        }
    })
    const respuesta = await res.json()
    return respuesta
}