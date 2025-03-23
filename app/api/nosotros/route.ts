import { NextResponse } from 'next/server'
import db from "@/libs/db"

export async function GET() {
    try {
        const enterprise = await db.enterprise.findMany()
        return NextResponse.json(enterprise)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}