import type { NextAuthConfig } from 'next-auth'

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login'
  },
  session: { strategy: 'jwt' },
  providers: [],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user
    }
  }
}
