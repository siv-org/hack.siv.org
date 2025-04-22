import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HACK SIV: Reports',
  description: 'Summary of findings from HACK SIV @ DEF CON 2024.',
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-300 lg:py-8">
      <div className="p-8 max-w-5xl mx-auto space-y-5 bg-white text-black/90 rounded">
        {children}
      </div>
    </div>
  )
}
