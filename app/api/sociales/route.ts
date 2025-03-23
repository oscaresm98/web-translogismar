import { NextRequest, NextResponse } from 'next/server'
import db from "@/libs/db"
import { auth } from '../auth/[...nextauth]/route'
import { revalidatePath, revalidateTag } from 'next/cache'
import { SocialMediaFormType } from '@/interfaces/socialMediaInterface'

export async function GET() {
    try {
        const socialMedias = await db.socialMedia.findMany()
        return NextResponse.json(socialMedias)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: 'Usuario no autenticado', }, { status: 401 })
        const data = await req.json();
        if (data.data) {
            data.data.forEach(async (socialMedia: SocialMediaFormType) => {
                if (socialMedia.link === 'eliminar') {
                    await db.socialMedia.delete({where:{name: socialMedia.name}})
                } else {
                    await db.socialMedia.upsert({
                        where: {
                            name: socialMedia.name,
                        },
                        update: {
                            link: socialMedia.link
                        },
                        create: socialMedia
                    })
                }
                
            });
            return NextResponse.json({ message: "Redes sociales creadas correctamentes", status: 202 }, { status: 202 })
        }

        const socialMediaFound = await db.socialMedia.findUnique({
            where: {
                name: data.name
            }
        })
        if (socialMediaFound) {
            return NextResponse.json({ message: "El nombre debe ser unico" }, { status: 400 })
        }
        const socialMedia = await db.socialMedia.create({ data })
        revalidateTag('dataSociales')
        return NextResponse.json(socialMedia)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}