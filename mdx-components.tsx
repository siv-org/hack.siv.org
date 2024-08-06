import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold border-b border-white/30 pb-3 mb-5">
        {children}
      </h1>
    ),
    ...components,
  }
}
