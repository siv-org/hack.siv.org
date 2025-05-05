import Link from 'next/link'

export const Menu = () => {
  return (
    <nav className="p-4 text-white">
      <ul className="flex gap-4">
        <li>
          <Link href="/" className="hover:text-blue-500">
            HACK SIV
          </Link>
        </li>
        <li>
          <Link href="/redvblue" className="hover:text-blue-500">
            Red vs Blue
          </Link>
        </li>
        <li>
          <Link href="/2024defcon" className="hover:text-blue-500">
            2024 DEFCON
          </Link>
        </li>
        <li>
          <Link href="/reports/2024defcon" className="hover:text-blue-500">
            Reports
          </Link>
        </li>
      </ul>
    </nav>
  )
}
