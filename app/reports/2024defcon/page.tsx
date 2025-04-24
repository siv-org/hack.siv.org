import { CustomCSS } from './CustomCSS'

import Content from './content.mdx'
import { MDXComponents } from './MDXComponents'

export default function Page() {
  return (
    <>
      <div className="text-[1.1rem] leading-[1.8] pb-8">
        <Content components={MDXComponents} />
      </div>
      <CustomCSS />
    </>
  )
}
