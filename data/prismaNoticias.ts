'use server'
import db from '@/libs/db'

export async function getNewsPrisma() { 
  try { 
    const news = await db.news.findMany() 
    return news 
  } catch (error) { 
    throw new Error('No se pudo cargar la data') 
  } 
}


