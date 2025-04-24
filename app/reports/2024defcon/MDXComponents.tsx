import { LinkableHeader } from './LinkableHeader'
type Children = { children?: React.ReactNode }

export const MDXComponents = {
  a: ({ href, children }: Children & { href?: string }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="text-[#1a5fb4] underline decoration-[rgba(26,95,180,0.3)] decoration-1 underline-offset-[2px] transition-all duration-200 ease-in-out hover:decoration-[#818a94] hover:bg-[rgba(26,95,180,0.05)] cursor-pointer"
    >
      {children}
    </a>
  ),
  h1: LinkableHeader('h1'),
  h2: LinkableHeader('h2'),
  h3: LinkableHeader('h3'),
  h4: ({ children }: Children) => (
    <h4 className="mt-6 text-[1.2rem] font-medium text-black leading-[1.5]">
      {children}
    </h4>
  ),
  p: ({ children }: Children) => <p className="my-3">{children}</p>,
  blockquote: ({ children }: Children) => (
    <blockquote className="text-[1.1rem] leading-[1.8] pl-8 p-6 my-6 bg-[#f8f9fa] text-[#34495e] border-l-4 border-[#95a5a6]">
      {children}
    </blockquote>
  ),
}
