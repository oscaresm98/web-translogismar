'use server'
import { headers } from "next/headers";
import { revalidateTag } from 'next/cache';

export async function getDataClients() {
  const myHeaders = headers();
  const res = await fetch(`${process.env.API_URL}/clientes`, { next: { tags: ['dataClients'] } })
  if (!res.ok) {
    throw new Error('No se pudo cargar la data')
  }
  const data = await res.json()
  return data
}

export async function createClient(data: FormData) {
  const myHeaders = headers();
  const myCookies = myHeaders.get('cookie') as string
  const res = await fetch(`${process.env.API_URL}/clientes`, {
    method: "POST",
    body: data,
    headers: {
      'cookie': myCookies
    },
    cache: 'no-store' // Asegura que no se usa caché para esta solicitud
  })
  const respuesta = await res.json()
  
  // Revalidar la caché después de crear un nuevo cliente
  revalidateTag('dataClients');
  
  return respuesta
}

export async function updateClient(data: FormData, id: number) {
  const myHeaders = headers();
  const myCookies = myHeaders.get('cookie') as string
  const res = await fetch(`${process.env.API_URL}/clientes/${id}`, {
    method: "PUT",
    body: data,
    headers: {
      'cookie': myCookies
    },
    cache: 'no-store'
  })
  const respuesta = await res.json()
  
  // Revalidar la caché después de actualizar
  revalidateTag('dataClients');
  
  return respuesta
}

export async function deleteClient(id: number) {
  const myHeaders = headers();
  const myCookies = myHeaders.get('cookie') as string
  const res = await fetch(`${process.env.API_URL}/clientes/${id}`, {
    method: "DELETE",
    headers: {
      'cookie': myCookies
    },
    cache: 'no-store'
  })
  const respuesta = await res.json()
  
  // Revalidar la caché después de eliminar
  revalidateTag('dataClients');
  
  return respuesta
}