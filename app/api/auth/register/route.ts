import { NextResponse } from "next/server";
import db from "@/libs/db"
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
    try {
        // return NextResponse.json({error: "Hola"}, {status: 400})
        const data = await request.json();
        const userFound = await db.users.findUnique({
            where: {
                email: data.email
            }
        })
        if (userFound) {
            return NextResponse.json({ message: "El email ya se encuentra registrado" }, { status: 400 })
        }
        data.password = await bcrypt.hash(data.password, 10)
        const newUser = await db.users.create({ data })
        const { password, ...user } = newUser
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}