import { NextRequest, NextResponse } from 'next/server'
import db from "@/libs/db"
import { auth } from '../auth/[...nextauth]/route'
import { uploadImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'

export async function GET() {
    try {
        const news = await db.news.findMany()
        return NextResponse.json(news)
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
        const folder = "translogismar/noticias"
        const imageCloudinary: any = await uploadImage(image, folder);
        data.imageURL = imageCloudinary.secure_url;
        const userFound = await db.users.findUnique({
            where: {
                email: formData.get('user') as string
            }
        })
        console.log("el usuario es:" + userFound)
        if (userFound) data.authorId = +userFound?.id;

        const newsFound = await db.news.findUnique({
            where: {
                title: data.title
            }
        })
        if (newsFound) {
            return NextResponse.json({ message: "El nombre debe ser unico" }, { status: 400 })
        }
        data.slug = data.title.toLocaleLowerCase().replaceAll(' ', '_').replaceAll("'", '').replaceAll(".", '')
        const news = await db.news.create({ data })
        revalidateTag('dataNews')
        return NextResponse.json(news)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}