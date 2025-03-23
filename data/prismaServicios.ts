'use server'
import db from '@/libs/db'

export async function getServicesPrisma() { 
  try { 
    const services = await db.services.findMany() 
    return services 
  } catch (error) { 
    throw new Error('No se pudo cargar la data') 
  } 
}