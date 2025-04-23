import type { MDXComponents } from 'mdx/types'
import { LinkableHeader } from './app/rules/LinkableHeader'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: LinkableHeader('h1'),
    h2: LinkableHeader('h2'),
    h3: LinkableHeader('h3'),
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="text-blue-400 underline underline-offset-[3.2px]"
      >
        {children}
      </a>
    ),
    ol: ({ children }) => (
      <ol className="pl-8 list-decimal space-y-1">{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className="pl-8 list-disc space-y-1">{children}</ul>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    tr: ({ children }) => <tr className="even:bg-gray-700/25">{children}</tr>,
    th: ({ children }) => (
      <th className="border border-gray-700 px-2 py-2">{children}</th>
    ),
    td: ({ children, style }) => (
      <td style={style} className="border border-gray-700 px-2 py-2">
        {children}
      </td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-700 pl-4 text-white/60 space-y-5">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="max-w-full overflow-x-scroll bg-gray-700/30 p-4 text-sm">
        {children}
      </pre>
    ),
    ...components,
  }
}
