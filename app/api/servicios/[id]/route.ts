import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '@/libs/auth'

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const session = await auth()
        if (!session) return NextResponse.json({ error: 'Usuario no autenticado' }, { status: 401 })

        const { id } = await params
        const service = await db.services.findUnique({ where: { id: +id } })
        if (!service) return NextResponse.json({ message: 'Servicio no encontrado' }, { status: 404 })

        if (service.imageURL) await deleteImage(service.imageURL, 'translogismar/services')
        await db.services.delete({ where: { id: +id } })
        revalidateTag('dataServices', 'default')
        return NextResponse.json({ message: 'Servicio eliminado correctamente' })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        let service;
        if (!Number(id)) {
            service = await db.services.findUnique({ where: { slug: id } })
        } else {
            service = await db.services.findUnique({ where: { id: +id } })
        }
        if (!service) return NextResponse.json({ message: "Servicio no encontrado" }, { status: 404 })

        const response = NextResponse.json(service)
        response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
        response.headers.set('ETag', `"${service.id}-${service.updateAt}"`)
        return response
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
        const folder = "translogismar/services"

        if (image instanceof File && image.size > 0) {
            await deleteImage(data?.imageURL, folder)
            const imageCloudinary: any = await uploadImage(image, folder)
            data.imageURL = imageCloudinary.secure_url
        }

        const serviceFound = await db.services.findMany({
            where: { name: data.name, NOT: { id: +id } }
        })
        if (serviceFound.length >= 1) return NextResponse.json({ message: "El nombre debe ser único" }, { status: 400 })

        data.slug = data.name.toLocaleLowerCase().replaceAll(' ', '_').replaceAll("'", '').replaceAll(".", '')
        const service = await db.services.update({ where: { id: +id }, data: { ...data } })
        revalidateTag('dataServices', 'default')

        const response = NextResponse.json(service)
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
        return response
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
