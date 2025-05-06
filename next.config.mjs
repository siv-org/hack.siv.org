import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/rules',
        destination: '/2024defcon/rules',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: { remarkPlugins: [remarkGfm], rehypePlugins: [] },
})

export default withMDX(nextConfig)
