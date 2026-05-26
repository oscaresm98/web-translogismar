import { NextRequest, NextResponse } from 'next/server'
import db from "@/libs/db"
import { auth } from '@/libs/auth'
import { uploadImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'

export async function GET() {
    try {
        const services = await db.services.findMany()
        return NextResponse.json(services)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: 'Usuario no autenticado', }, { status: 401 })
        const formData = await req.formData();
        const image = formData.get('image');
        const data = JSON.parse(formData.get("recipe") as string);
        const folder = "translogismar/services"
        if (!(image instanceof File) || image.size === 0) {
            return NextResponse.json({ message: "La imagen es requerida" }, { status: 400 })
        }
        const imageCloudinary: any = await uploadImage(image, folder);
        data.imageURL = imageCloudinary.secure_url;
        const userFound = await db.users.findUnique({
            where: {
                email: formData.get('user') as string
            }
        })
        if (!userFound) return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 400 })
        data.authorId = userFound.id;

        const serviceFound = await db.services.findUnique({
            where: {
                name: data.name
            }
        })
        if (serviceFound) {
            return NextResponse.json({ message: "El nombre debe ser unico" }, { status: 400 })
        }
        data.slug = data.name.toLocaleLowerCase().replaceAll(' ', '_').replaceAll("'", '').replaceAll(".", '')
        const service = await db.services.create({ data })
        revalidateTag('dataServices', 'default')
        return NextResponse.json(service)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}