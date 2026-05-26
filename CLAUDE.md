# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npx prisma studio # Open Prisma database UI
npx prisma migrate dev --name <name>  # Create and apply a migration
npx prisma db seed  # Seed database via prisma/seed.ts
```

No test framework is configured.

## Stack

- **Next.js 14** App Router with TypeScript 5
- **Prisma + PostgreSQL** (Neon cloud DB) — client singleton in `libs/db.ts`
- **NextAuth v4** credentials (email/password) — config in `auth.config.ts`
- **Cloudinary** for image uploads — helper in `libs/upload-image.ts`
- **Resend** for transactional email
- **Tailwind CSS** + **Framer Motion** for styling/animation
- **React Hook Form** for forms, **SWR** for client-side fetching

## Architecture

### Route groups
- `app/(frontend)/` — public pages (home, services, news, about, contact)
- `app/admin/` — CMS dashboard, protected by `middleware.ts`
- `app/api/` — REST endpoints following Next.js App Router conventions
- `app/auth/` — login page (register is also middleware-protected)

### Data fetching pattern
Two layers exist depending on context:

1. **Server components** use files in `data/prisma*.ts` — these call Prisma directly and wrap results in `unstable_cache` with tag-based revalidation (e.g., `revalidateTag('dataServices')`). Revalidation is triggered from API route handlers after mutations.

2. **Client components** use SWR hooks in `hooks/` — these fetch from the `/api/*` routes. Matching data helpers in `data/*.ts` (non-prisma files) provide the fetch functions.

### Admin CRUD pattern
Each entity (services, news, clients, about) follows the same structure:
- `app/admin/<entity>/` — list + edit/create pages
- `app/api/<entity>/route.ts` — collection endpoint (GET, POST)
- `app/api/<entity>/[id]/route.ts` — item endpoint (PUT, DELETE)
- `components/admin/` — shared admin UI components
- Image uploads use `FormData` sent to the API, which forwards to Cloudinary via `libs/upload-image.ts`

### Middleware
`middleware.ts` protects `/admin/:path*` and `/auth/register`. Auth check uses `getToken` from `next-auth/jwt`.

### Theme
Custom Tailwind colors defined in `tailwind.config.ts`:
- `accent` → orange `#ff6a0f`
- `dark` → blue `#233343`

### Path alias
`@/*` resolves to the project root (set in `tsconfig.json`).

## Environment variables required
```
DATABASE_URL          # Neon PostgreSQL connection string
NEXTAUTH_SECRET       # NextAuth session secret
NEXTAUTH_URL          # App base URL
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
RESEND_API_KEY
```
