import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const createPrismaClient = () => {
  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
  return new PrismaClient({ adapter })
}

declare global {
  var prisma: undefined | ReturnType<typeof createPrismaClient>
}

const prisma = globalThis.prisma ?? createPrismaClient()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
