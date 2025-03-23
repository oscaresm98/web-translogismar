import { NextRequest, NextResponse } from 'next/server'
import db from "@/libs/db"
import { auth } from '@/libs/auth'
import { uploadImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'

export async function GET() {
  try {
      const clients = await db.client.findMany()
      return NextResponse.json(clients)
  } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
      const session = await auth();
      if (!session) return NextResponse.json({ error: 'Usuario no autenticado', }, { status: 401 })
      const formData = await req.formData();
      const image = formData.get('image') as unknown as File;
      const data = JSON.parse(formData.get("recipe") as string);
      const folder = "translogismar/clients"
      const imageCloudinary: any = await uploadImage(image, folder);
      data.imageURL = imageCloudinary.secure_url;
      const client = await db.client.create({ data })
      revalidateTag('dataClients')
      return NextResponse.json(client)
  } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 })
  }
}