import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '../../auth/[...nextauth]/route'
import { NextApiRequest } from 'next'


export async function GET(req: NextApiRequest, { params }: { params: { id: string } }) {
    try {
        let news;
        if(!Number(params.id)) {
            news = await db.news.findUnique({
                where: {
                    slug: params.id
                }
            })
        }else {
            news = await db.news.findUnique({
                where: {
                    id: +params.id
                }
            })
        }
        if (!news) {
            return NextResponse.json({ message: "Noticia no encontrado" }, { status: 404 })
        }
        return NextResponse.json(news)
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
        const folder = "translogismar/noticias"
        if (image) {
            await deleteImage(data?.imageURL, folder);
            const imageCloudinary: any = await uploadImage(image, folder);
            data.imageURL = imageCloudinary.secure_url;
        }

        const newsFound = await db.news.findMany({
            where: {
                title: data.title
            },

        })
        if (newsFound.length === 2) {
            return NextResponse.json({ message: "El nombre debe ser unico" }, { status: 400 });
        }
        data.slug = data.title.toLocaleLowerCase().replaceAll(' ', '_').replaceAll("'", '').replaceAll(".", '');
        const service = await db.news.update({
            where: {
                id: +params.id
            },
            data: {
                ...data
            }
        })
        revalidateTag('dataNew')
        revalidateTag('dataNews')
        return NextResponse.json(service)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
