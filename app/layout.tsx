import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Menu } from './Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hack SIV',
  description:
    'Find vulnerabilities & get rewarded to make the Secure Internet Voting Protocol as secure as possible.',
  openGraph: { images: undefined },
  twitter: { card: 'summary', images: undefined },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
