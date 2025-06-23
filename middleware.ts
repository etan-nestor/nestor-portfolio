// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  if (path.startsWith('/admin')) {
    const token = req.cookies.get('admin_auth')?.value

    if (!token || token !== 'valid') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  return NextResponse.next()
}
