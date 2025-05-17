'use server'
import db from '@/libs/db'
import { unstable_cache } from 'next/cache'

export const getEnterprisesPrisma = unstable_cache(
  async () => { 
    try { 
      const nosotros = await db.enterprise.findMany() 
      return nosotros 
    } catch (error) { 
      throw new Error('No se pudo cargar la data') 
    } 
  },
  ['enterprise-list'],
  {
    tags: ['dataEnterprises'], // Tag consistente para revalidación
    revalidate: 30 // Revalidación cada 30 segundos
  }
)


