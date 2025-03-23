import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/auth.config";
import type { NextApiRequest, NextApiResponse } from "next";

export async function auth(...args: [] | [NextApiRequest, NextApiResponse]): Promise<Session | null> {
  if (args.length === 0) {
    // Modo App Router
    return getServerSession(authOptions);
  } else {
    // Modo API: args es [req, res]
    const [req, res] = args;
    return getServerSession(req, res, authOptions);
  }
}
