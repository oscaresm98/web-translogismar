import { NextResponse, NextRequest } from 'next/server'
import db from "@/libs/db"
import { uploadImage, deleteImage } from '@/libs/upload-image'
import { revalidateTag } from 'next/cache'
import { auth } from '@/libs/auth'


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        let service;
        if(!Number(params.id)) {
            service = await db.services.findUnique({
                where: {
                    slug: params.id
                }
            })
        }else {
            service = await db.services.findUnique({
                where: {
                    id: +params.id
                }
            })
        }
        if (!service) {
            return NextResponse.json({ message: "Servicio no encontrado" }, { status: 404 })
        }
        
        // Configurar headers de caché para respuestas GET
        const response = NextResponse.json(service);
        
        // Permitir caché por 1 hora (3600 segundos)
        response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
        
        // Añadir ETag para validación condicional
        const etag = `"${service.id}-${service.updateAt}"`; 
        response.headers.set('ETag', etag);
        
        return response;
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
        const folder = "translogismar/services"
        if (image) {
            await deleteImage(data?.imageURL, folder);
            const imageCloudinary: any = await uploadImage(image, folder);
            data.imageURL = imageCloudinary.secure_url;
        }

        const serviceFound = await db.services.findMany({
            where: {
                name: data.name
            },

        })
        if (serviceFound.length === 2) {
            return NextResponse.json({ message: "El nombre debe ser unico" }, { status: 400 });
        }
        data.slug = data.name.toLocaleLowerCase().replaceAll(' ', '_').replaceAll("'", '').replaceAll(".", '');
        const service = await db.services.update({
            where: {
                id: +params.id
            },
            data: {
                ...data
            }
        })
        revalidateTag('dataService')
        revalidateTag('dataServices')
        
        // Asegurar que las respuestas PUT no se almacenen en caché
        const response = NextResponse.json(service);
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
        
        return response;
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
