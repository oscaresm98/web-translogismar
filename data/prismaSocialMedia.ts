'use server'
import db from '@/libs/db'
import { unstable_cache } from 'next/cache'

export const getSocialMediasPrisma = unstable_cache(
  async () => {
    try {
      const socialMedia = await db.socialMedia.findMany()
      return socialMedia
    } catch (error) {
      throw new Error('No se pudo cargar la data')
    }
  },
  ['social-media-list'],
  {
    tags: ['dataSociales'],
    revalidate: 30
  }
)


