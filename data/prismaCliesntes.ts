'use server'
import db from '@/libs/db'

export async function getClientsPrisma() { 
  try { 
    const clientes = await db.client.findMany() 
    return clientes 
  } catch (error) { 
    throw new Error('No se pudo cargar la data') 
  } 
}


