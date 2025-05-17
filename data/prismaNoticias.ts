'use server'
import db from '@/libs/db'
import { unstable_cache } from 'next/cache'

export const getNewsPrisma = unstable_cache(
  async () => { 
    try { 
      const news = await db.news.findMany() 
      return news 
    } catch (error) { 
      throw new Error('No se pudo cargar la data') 
    } 
  },
  ['news-list'],
  {
    tags: ['dataNews'], // Tag consistente para revalidación
    revalidate: 30 // Revalidación cada 30 segundos
  }
)


