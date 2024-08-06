import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold border-b border-white/30 pb-3">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold border-b border-white/30 pb-1.5">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className="text-xl font-semibold">{children}</h3>,
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        {children}
      </a>
    ),
    ol: ({ children }) => <ol className="pl-8 list-decimal">{children}</ol>,
    li: ({ children }) => <li className="pl-1">{children}</li>,
    tr: ({ children }) => <tr className="even:bg-gray-400/10">{children}</tr>,
    th: ({ children }) => (
      <th className="border border-gray-700 px-2 py-2">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-700 px-2 py-2">{children}</td>
    ),
    ...components,
  }
}
