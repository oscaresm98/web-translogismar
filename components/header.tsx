import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/img/logo.png'
import logoMundo from '@/public/img/logoMundo.png'
import Navigation from './navigation'

export default function Header() {
  return (
    <header className="py-4 bg-white">
      <div className="flex flex-col items-center md:flex-row md:justify-between lg:container lg:mx-auto">
        <Link href='/'>
          <Image
            className="mx-auto md:mx-0"
            src={logo}
            alt='imagen de logo'
            priority
            width={300}
          />
        </Link>

        <Navigation />

      </div>
    </header>
  )
}
