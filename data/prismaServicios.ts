'use server'
import db from '@/libs/db'
import { unstable_cache } from 'next/cache'

// Optimizamos la caché con un tiempo razonable que permite frescura sin sacrificar rendimiento
export const getServicesPrisma = unstable_cache(
  async () => { 
    try { 
      const services = await db.services.findMany() 
      return services 
    } catch (error) { 
      throw new Error('No se pudo cargar la data') 
    } 
  },
  ['services-list'],
  {
    tags: ['dataServices'], // Tag consistente para revalidación
    revalidate: 30 // Revalidación cada 30 segundos como compromiso entre rendimiento y frescura
  }
)