import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HACK SIV: Rules',
  description:
    'Find vulnerabilities & get rewarded to make the Secure Internet Voting Protocol as secure as possible.',
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="px-8 py-6 max-w-5xl mx-auto">{children}</div>
}
