import NextAuth from "next-auth"
import { Users as UserModel } from '@prisma/client';

declare module 'next-auth' {
  interface User extends UserModel {
    id: number;
  }
}