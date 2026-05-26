import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '@/libs/auth'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const enterpriseFound = await db.enterprise.findUnique({ where: { id: +id } })
        if (!enterpriseFound) return NextResponse.json({ message: "Empresa no encontrada" }, { status: 404 })
        return NextResponse.json(enterpriseFound)
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
        const folder = "translogismar/nosotros"

        if (image instanceof File && image.size > 0) {
            await deleteImage(data?.ImageURL, folder)
            const imageCloudinary: any = await uploadImage(image, folder)
            data.ImageURL = imageCloudinary.secure_url
        }

        const enterprise = await db.enterprise.update({ where: { id: +id }, data: { ...data } })
        revalidateTag('dataEnterprise', 'default')
        revalidateTag('dataEnterprises', 'default')
        return NextResponse.json(enterprise)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
