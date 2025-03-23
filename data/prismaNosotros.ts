'use server'
import db from '@/libs/db'

export async function getEnterprisesPrisma() { 
  try { 
    const nosotros = await db.enterprise.findMany() 
    return nosotros 
  } catch (error) { 
    throw new Error('No se pudo cargar la data') 
  } 
}


