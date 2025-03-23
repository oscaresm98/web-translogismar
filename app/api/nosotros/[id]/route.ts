import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '../../auth/[...nextauth]/route'
import { NextApiRequest } from 'next'


export async function GET(req: NextApiRequest, { params }: { params: { id: number } }) {
    try {
        const enterpriseFound = await db.enterprise.findUnique({
            where: {
                id: +params.id
            }
        })
        if (!enterpriseFound) {
            return NextResponse.json({ message: "Empresa no encontrado" }, { status: 404 })
        }
        return NextResponse.json(enterpriseFound)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500, statusText: error.message })
    }
}

//TODO: edit put to this
export async function PUT(req: NextRequest, { params }: { params: { id: number } }) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: 'Usuario no autenticado', }, { status: 401 })
        const formData = await req.formData();
        const image = formData.get('image') as unknown as File;
        const data = JSON.parse(formData.get("recipe") as string);
        const folder = "translogismar/nosotros"
        if (image) {
            await deleteImage(data?.ImageURL, folder);
            const imageCloudinary: any = await uploadImage(image, folder);
            data.ImageURL = imageCloudinary.secure_url;
        }

        const enterprise = await db.enterprise.update({
            where: {
                id: +params.id
            },
            data: {
                ...data
            }
        })
        revalidateTag('dataEnterprise')
        revalidateTag('dataEnterprises')
        return NextResponse.json(enterprise)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
