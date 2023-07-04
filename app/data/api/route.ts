import { NextResponse } from "next/server"

export async function GET(req: Request) {
    return NextResponse.json({ a: process.env.SECRET_DATA })
}
