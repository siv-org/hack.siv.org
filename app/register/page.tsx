import Link from 'next/link'
import { Register } from '../register'

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col items-center p-6 pt-10 sm:p-24 space-y-12 sm:text-lg">
      <h3 className="text-xl">Register for HACK SIV</h3>
      <Register />

      <Link
        className="underline text-blue-400 text-opacity-60 hover:text-opacity-100"
        href="/"
      >
        ◂ Return home
      </Link>
    </main>
  )
}
