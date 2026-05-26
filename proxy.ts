import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import type { NextRequest } from 'next/server'

const { auth } = NextAuth(authConfig)

export async function proxy(request: NextRequest) {
  return (auth as any)(request)
}

export const config = { matcher: ['/admin/:path*', '/auth/register'] }
