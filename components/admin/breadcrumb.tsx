import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm mb-5">
      <Link href="/admin" className="text-neutral-400 hover:text-secun transition-colors">
        Panel
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="text-neutral-300">/</span>
          {item.href ? (
            <Link href={item.href} className="text-neutral-400 hover:text-secun transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-700 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
