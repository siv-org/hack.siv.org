import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { FaLink } from 'react-icons/fa'

function headerToId(children: ReactNode) {
  // Convert header content to text for link
  let text = children
  if (typeof children !== 'string') {
    text = Array.isArray(children)
      ? children.filter((child) => typeof child === 'string').join(' ')
      : 'Unknown error grabbing error text'
  }

  // Strip out non-url-safe characters
  return text
    ?.toString()
    ?.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[\.\']/g, '')
}

const sharedStyle = `font-semibold relative group mb-5`

const headerTypes = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1
      className={`text-[32px] !font-bold ${sharedStyle}`}
      id={headerToId(children)}
      {...{ children }}
    />
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2
      className={`text-[1.8rem] border-b border-[#1a5fb4]/20 pb-1.5 !mt-12 ${sharedStyle}`}
      id={headerToId(children)}
      {...{ children }}
    />
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3
      className={`text-[1.4rem] ${sharedStyle}`}
      id={headerToId(children)}
      {...{ children }}
    />
  ),
}

export const LinkableHeader = (size: keyof typeof headerTypes) =>
  function HeaderTag({
    children,
  }: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >) {
    const El = headerTypes[size]
    return (
      <El>
        <a
          href={'#' + headerToId(children)}
          className="px-2 absolute -left-8 group-hover:opacity-70 opacity-0 h-full"
        >
          <FaLink className={`text-[16px] h-full ${size !== 'h3' && 'pb-2'}`} />
        </a>

        {children}
      </El>
    )
  }
