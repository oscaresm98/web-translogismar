import Link from 'next/link'
import SignOutButton from '@/components/admin/sign-out-button'

export default function HeaderAdmin() {
  return (
    <header className="px-4 py-3 bg-white border-b border-neutral-200 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-light text-neutral-500">
          Panel de{' '}
          <span className="text-secun font-bold">Administración</span>
        </h1>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            target="_blank"
            className="uppercase text-secun font-bold text-sm p-2 transition duration-300 hover:text-prima"
          >
            Ver Sitio
          </Link>
          <span className="text-neutral-200 select-none">|</span>
          <SignOutButton />
        </div>
      </div>
    </header>
  )
}
