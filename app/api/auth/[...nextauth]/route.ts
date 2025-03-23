import NextAuth, { NextAuthOptions, User, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from 'bcrypt'
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Ingrese Email" },
        password: { label: "Password", type: "password", placeholder: "Ingrese contraseña" }
      },
      async authorize(credentials, req) {
        const userFound = await db.users.findUnique({
          where: {
            email: credentials?.email
          }
        })
        if (!userFound) throw new Error('Email no encontrado')
        let matchPassword;
        if (credentials) {
          matchPassword = await bcrypt.compare(credentials.password, userFound.password)
        }
        if (!matchPassword) throw new Error('Contraseña incorrecta')

        return {
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        } as User
      }
    })
  ],
  pages: {
    signIn: "/auth/login"
  }
}

const handler = NextAuth(authOptions)

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authOptions)
}

export { handler as GET, handler as POST }