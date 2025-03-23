import { initialData } from './seed/data'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const main = async (): Promise<void> => {
  try {
    await deleteTables()
    //TODO: mirar el tema del rol
    const userCreated = await prisma.users.create({ data: initialData.users })

    const newServices = initialData.services.map(service => {
      service.authorId = userCreated.id
      return service
    })
    const myNews = initialData.news.map(myNew => {
      myNew.authorId = userCreated.id
      return myNew
    })
    await Promise.allSettled([
      prisma.services.createMany({data: newServices}),
      prisma.news.createMany({data: myNews}),
      prisma.enterprise.create({data: initialData.enterprise}), 
      prisma.socialMedia.createMany({data: initialData.socialMedia}),
      prisma.client.createMany({data: initialData.clients})
    ])
  } catch (error) {
    console.log(error);
  }
}

async function deleteTables() {
  await prisma.services.deleteMany({})
  await prisma.news.deleteMany({})
  await Promise.allSettled([
    await prisma.users.deleteMany({}),
    await prisma.enterprise.deleteMany({}),
    await prisma.socialMedia.deleteMany({}),
    await prisma.client.deleteMany({}),
  ])
  
}

main()
  .then( async () => {
    await prisma.$disconnect()
  })
  .catch( async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })