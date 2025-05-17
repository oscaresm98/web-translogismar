'use server'
import db from '@/libs/db'
import { unstable_cache } from 'next/cache'

export const getClientsPrisma = unstable_cache(
  async () => { 
    try { 
      const clientes = await db.client.findMany() 
      return clientes 
    } catch (error) { 
      throw new Error('No se pudo cargar la data') 
    } 
  },
  ['clients-list'],
  {
    tags: ['dataClients'], // Tag consistente para revalidación
    revalidate: 10 // Revalidación cada 30 segundos
  }
)


