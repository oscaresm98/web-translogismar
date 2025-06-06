export { default } from "next-auth/middleware"

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// "/admin/:path*"
export const config = { matcher: ["/admin/:path*", "/auth/register"] }


// const allowedOrigins = [process.env.NEXTAUTH_URL]
 
// const corsOptions = {
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
// }
 
// export function middleware(request: NextRequest) {
//   // Check the origin from the request
//   const origin = request.headers.get('origin') ?? ''
//   const isAllowedOrigin = allowedOrigins.includes(origin)
 
//   // Handle preflighted requests
//   const isPreflight = request.method === 'OPTIONS'
 
//   if (isPreflight) {
//     const preflightHeaders = {
//       ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
//       ...corsOptions,
//     }
//     return NextResponse.json({}, { headers: preflightHeaders })
//   }
 
//   // Handle simple requests
//   const response = NextResponse.next()
 
//   if (isAllowedOrigin) {
//     response.headers.set('Access-Control-Allow-Origin', origin)
//   }
 
//   Object.entries(corsOptions).forEach(([key, value]) => {
//     response.headers.set(key, value)
//   })
 
//   return response
// }

