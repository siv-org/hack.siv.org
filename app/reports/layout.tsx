import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hack SIV • DEF CON 2024 Report',
  description: 'Summary of findings from HACK SIV @ DEF CON 2024.',
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-slate-700/80 lg:py-8">
      <div className="p-8 max-w-4xl mx-auto space-y-5 bg-white text-black/90 rounded shadow-xl border border-gray-100">
        {children}
      </div>
    </div>
  )
}
