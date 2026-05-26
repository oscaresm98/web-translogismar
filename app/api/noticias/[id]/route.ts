import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '@/libs/auth'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        let news;
        if (!Number(id)) {
            news = await db.news.findUnique({ where: { slug: id } })
        } else {
            news = await db.news.findUnique({ where: { id: +id } })
        }
        if (!news) return NextResponse.json({ message: "Noticia no encontrada" }, { status: 404 })
        return NextResponse.json(news)
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
        const folder = "translogismar/noticias"

        if (image instanceof File && image.size > 0) {
            await deleteImage(data?.imageURL, folder)
            const imageCloudinary: any = await uploadImage(image, folder)
            data.imageURL = imageCloudinary.secure_url
        }

        const newsFound = await db.news.findMany({
            where: { title: data.title, NOT: { id: +id } }
        })
        if (newsFound.length >= 1) return NextResponse.json({ message: "El título debe ser único" }, { status: 400 })

        data.slug = data.title.toLocaleLowerCase().replaceAll(' ', '_').replaceAll("'", '').replaceAll(".", '')
        const news = await db.news.update({ where: { id: +id }, data: { ...data } })
        revalidateTag('dataNew', 'default')
        revalidateTag('dataNews', 'default')
        return NextResponse.json(news)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const session = await auth()
        if (!session) return NextResponse.json({ error: 'Usuario no autenticado' }, { status: 401 })

        const { id } = await params
        const noticia = await db.news.findUnique({ where: { id: +id } })
        if (!noticia) return NextResponse.json({ message: "Noticia no encontrada" }, { status: 404 })

        if (noticia.imageURL) await deleteImage(noticia.imageURL, "translogismar/noticias")
        await db.news.delete({ where: { id: +id } })
        revalidateTag('dataNew', 'default')
        revalidateTag('dataNews', 'default')
        return NextResponse.json({ message: "Noticia eliminada correctamente" })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
