import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/img/logo.svg'
import Navigation from './navigation'


export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-4 bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-soft">
      <div className="flex flex-col items-center md:flex-row md:justify-between container-custom animate-fade-in">
        <Link href='/' className="hover:scale-105 transition-transform duration-300">
          <Image
            className="mx-auto md:mx-0 drop-shadow-sm"
            src={logo}
            alt='imagen de logo'
            priority
            width={400}
          />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
