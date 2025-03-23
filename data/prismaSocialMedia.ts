'use server'
import db from '@/libs/db'

export async function getSocialMediasPrisma() { 
  try { 
    const socialMedia = await db.socialMedia.findMany() 
    return socialMedia 
  } catch (error) { 
    throw new Error('No se pudo cargar la data') 
  } 
}


