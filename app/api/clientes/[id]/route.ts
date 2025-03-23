import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '../../auth/[...nextauth]/route'
import { NextApiRequest } from 'next'


export async function GET(req: NextApiRequest, { params }: { params: { id: number } }) {
  try {
    const client = await db.client.findUnique({
      where: {
        id: +params.id
      }
    })
    if (!client) {
      return NextResponse.json({ message: "Cliente no encontrado" }, { status: 404 })
    }
    return NextResponse.json(client)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500, statusText: error.message })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: 'Usuario no autenticado', }, { status: 401 })
    const formData = await req.formData();
    const image = formData.get('image') as unknown as File;
    const data = JSON.parse(formData.get("recipe") as string);
    const folder = "translogismar/clients"
    if (image) {
      await deleteImage(data?.imageURL, folder);
      const imageCloudinary: any = await uploadImage(image, folder);
      data.imageURL = imageCloudinary.secure_url;
    }
    const client = await db.client.update({
      where: {
        id: +params.id
      },
      data: {
        ...data
      }
    })
    revalidateTag('dataClient')
    revalidateTag('dataClients')
    return NextResponse.json(client)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    const session = await auth();
    if (!session) return NextResponse.json({ error: 'Usuario no autenticado', }, { status: 401 })
    const foundClient = await db.client.findUnique({
      where: {
        id: +params.id
      }
    })
    if(!foundClient) {
      return NextResponse.json({ message: "Cliente no encontrado" }, { status: 404 })
    }
    const folder = "translogismar/clients"
    await deleteImage(foundClient.imageURL, folder);
    await db.client.delete({
      where: {
        id: +params.id
      }
    })
    revalidateTag('dataClients')
    return NextResponse.json("Cliente eliminado")
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}