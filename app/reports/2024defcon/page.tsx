import { CustomCSS } from './CustomCSS'
import Content from './content.mdx'

type Children = { children: React.ReactNode }

const overrideComponents = {
  a: ({ children }: Children) => (
    <a className="text-[#1a5fb4] underline decoration-[rgba(26,95,180,0.3)] decoration-1 underline-offset-[2px] transition-all duration-200 ease-in-out hover:decoration-[#1a5fb4] hover:bg-[rgba(26,95,180,0.05)] cursor-pointer">
      {children}
    </a>
  ),
  h2: ({ children }: Children) => (
    <h2 className="text-[1.8rem] font-bold text-black mb-8 mt-12 relative after:content-[''] after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[1px] after:bg-[#1a5fb4] after:opacity-20">
      {children}
    </h2>
  ),
  h4: ({ children }: Children) => (
    <h4 className="text-[1.2rem] font-medium text-black leading-[1.5] mt-10">
      {children}
    </h4>
  ),
  p: ({ children }: Children) => (
    <p className="text-[1.1rem] leading-[1.8] mb-6">{children}</p>
  ),
  blockquote: ({ children }: Children) => (
    <blockquote className="text-[1.1rem] leading-[1.8] pl-8 p-6 pb-0.5 my-6 bg-[#f8f9fa] text-[#34495e] border-l-4 border-[#95a5a6]">
      {children}
    </blockquote>
  ),
}

export default function Page() {
  return (
    <>
      <Content components={overrideComponents} />
      <CustomCSS />
    </>
  )
}
