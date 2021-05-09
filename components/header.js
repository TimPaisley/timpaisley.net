import Link from 'next/link'
import Socials from '../components/socials'

export default function Header() {
  return (
    <div className="p-8 pt-16">
      <Link href="/">
        <a>
          <img className="w-24 mx-auto mb-4 rounded-full" src="/images/me.png" />
          <h1 className="text-center text-3xl font-bold">
            Tim Paisley
          </h1>
        </a>
      </Link>

      <div className="mt-4">
        <Socials />
      </div>
    </div>
  )
}