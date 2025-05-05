import Link from 'next/link'

const links = [
  { href: '/', label: 'HACK SIV' },
  { href: '/redvblue', label: 'Red vs Blue' },
  { href: '/2024defcon', label: '2024 DEFCON' },
  { href: '/reports/2024defcon', label: 'Reports' },
]

export const Menu = () => {
  return (
    <nav className="p-6 text-white">
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        <li className="w-full text-center tracking-wide text-xl">
          <Link href="/" className="block hover:text-green-800 transition">
            HACK SIV
          </Link>
        </li>
        {links.slice(1).map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="block hover:text-green-500 hover:underline transition text-lg"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
