// app/api/admin/login/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { cuid, password } = body

  const validCuid = process.env.ADMIN_CUID
  const validPassword = process.env.ADMIN_PASSWORD

  if (cuid === validCuid && password === validPassword) {
    const res = NextResponse.json({ success: true })

    // Cookie HTTPOnly sécurisé
    res.cookies.set("admin_auth", "valid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: "lax",
      path: "/",
      maxAge: 40 * 40 * 2 
    })

    return res
  }

  return NextResponse.json({ success: false, error: "Identifiants invalides" }, { status: 401 })
}
