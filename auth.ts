import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import db from '@/libs/db'
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const userFound = await db.users.findUnique({
          where: { email: credentials.email as string }
        })
        if (!userFound) return null

        const valid = await bcrypt.compare(
          credentials.password as string,
          userFound.password
        )
        if (!valid) return null

        return {
          id: String(userFound.id),
          name: userFound.name,
          email: userFound.email
        }
      }
    })
  ]
})
