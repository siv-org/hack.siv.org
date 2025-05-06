'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/redvblue', label: 'Host Challenge' },
  { href: '/reports/2024defcon', label: 'Reports' },
  { href: '/2024defcon', label: '2024 DEFCON' },
]

const activeLinkColor =
  'bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'
const hoverLinkColor = 'hover:text-sky-400'

export const Menu = () => {
  const pathname = usePathname()

  return (
    <nav className="p-6 text-white bg-[#114852] shadow-md shadow-green-900">
      {/* Top row */}
      <div className="text-center tracking-wide text-xl w-full mb-4">
        <span className="inline-block">
          <Link
            href="/"
            className={`font-bold ${
              pathname === '/' ? activeLinkColor : hoverLinkColor
            }`}
          >
            HACK SIV
          </Link>
        </span>
      </div>

      {/* Bottom row */}
      <ul className="flex justify-center gap-x-8">
        {links.map(({ href, label }) => (
          <li key={href} className="text-center">
            <Link
              href={href}
              className={`text-sm sm:text-lg ${
                pathname === href ? activeLinkColor : hoverLinkColor
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
