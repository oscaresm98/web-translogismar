import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '@/libs/auth'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const client = await db.client.findUnique({ where: { id: +id } })
    if (!client) return NextResponse.json({ message: "Cliente no encontrado" }, { status: 404 })
    return NextResponse.json(client)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500, statusText: error.message })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth()
    if (!session) return NextResponse.json({ error: 'Usuario no autenticado' }, { status: 401 })

    const { id } = await params
    const formData = await req.formData()
    const image = formData.get('image') as unknown as File
    const data = JSON.parse(formData.get("recipe") as string)
    const folder = "translogismar/clients"

    if (image instanceof File && image.size > 0) {
      await deleteImage(data?.imageURL, folder)
      const imageCloudinary: any = await uploadImage(image, folder)
      data.imageURL = imageCloudinary.secure_url
    }

    const client = await db.client.update({ where: { id: +id }, data: { ...data } })
    revalidateTag('dataClient', 'default')
    revalidateTag('dataClients', 'default')
    return NextResponse.json(client)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth()
    if (!session) return NextResponse.json({ error: 'Usuario no autenticado' }, { status: 401 })

    const { id } = await params
    const foundClient = await db.client.findUnique({ where: { id: +id } })
    if (!foundClient) return NextResponse.json({ message: "Cliente no encontrado" }, { status: 404 })

    await deleteImage(foundClient.imageURL, "translogismar/clients")
    await db.client.delete({ where: { id: +id } })
    revalidateTag('dataClients', 'default')
    return NextResponse.json({ message: "Cliente eliminado correctamente" })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
