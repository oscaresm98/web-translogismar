import { auth } from '@/libs/auth'
import db from '@/libs/db'
import Link from 'next/link'

export default async function Admin() {
  const session = await auth()

  const [servicesCount, newsCount, clientsCount] = await Promise.all([
    db.services.count(),
    db.news.count(),
    db.client.count(),
  ])

  const stats = [
    {
      label: 'Servicios',
      count: servicesCount,
      href: '/admin/servicios',
      accent: 'border-secun',
      countColor: 'text-secun',
    },
    {
      label: 'Noticias',
      count: newsCount,
      href: '/admin/noticias',
      accent: 'border-prima',
      countColor: 'text-prima',
    },
    {
      label: 'Clientes',
      count: clientsCount,
      href: '/admin/clientes',
      accent: 'border-green-500',
      countColor: 'text-green-600',
    },
  ]

  return (
    <div className="container p-6 max-w-4xl">
      {/* Bienvenida */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-secun">
          Hola,{' '}
          <span className="text-prima">{session?.user?.name ?? 'Administrador'}</span>
        </h1>
        <p className="text-neutral-400 mt-1 text-sm">
          Panel de administración · M.S. Grupo Logístico
        </p>
      </div>

      {/* Estadísticas */}
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">
        Resumen de contenido
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {stats.map(stat => (
          <Link
            key={stat.label}
            href={stat.href}
            className={`bg-white rounded-xl border-l-4 ${stat.accent} border border-neutral-100 p-6 hover:shadow-md transition-shadow group`}
          >
            <p className="text-sm text-neutral-400 mb-2">{stat.label}</p>
            <p className={`text-4xl font-bold ${stat.countColor}`}>{stat.count}</p>
            <p className={`text-xs font-semibold mt-3 ${stat.countColor} group-hover:underline`}>
              Ver {stat.label.toLowerCase()} →
            </p>
          </Link>
        ))}
      </div>

      {/* Acciones rápidas */}
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">
        Acciones rápidas
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/servicios/nuevo"
          className="bg-secun text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-dark-800 transition-colors"
        >
          + Nuevo servicio
        </Link>
        <Link
          href="/admin/noticias/nuevo"
          className="bg-prima text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-colors"
        >
          + Nueva noticia
        </Link>
        <Link
          href="/admin/clientes/nuevo"
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          + Nuevo cliente
        </Link>
      </div>
    </div>
  )
}
