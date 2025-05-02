import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HACK SIV: Red vs Blue Team Challenge',
  description:
    'A live capture‑the‑flag for elections: break it, defend it, learn.',
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="px-8 py-6 sm:py-12 max-w-5xl mx-auto space-y-5">
      {children}
    </div>
  )
}
