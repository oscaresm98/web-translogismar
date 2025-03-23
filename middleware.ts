export { default } from "next-auth/middleware"

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// "/admin/:path*"
export const config = { matcher: ["/admin/:path*", "/auth/register"] }


export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  // En Vercel normalmente se usa HTTPS, pero se fuerza en caso de que no sea así
  if (url.protocol !== 'https:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url)
  }

  // Si la petición no es al dominio correcto, redirige a él
  if (req.headers.get('host') !== 'web-translogismar.vercel.app') {
    url.hostname = 'web-translogismar.vercel.app'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}


