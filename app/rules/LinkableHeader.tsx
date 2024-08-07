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

const sharedStyle = `font-semibold relative group`

const headerTypes = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1
      className={`text-3xl border-b border-white/30 pb-3 ${sharedStyle}`}
      id={headerToId(children)}
      {...{ children }}
    />
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2
      className={`text-2xl border-b border-white/30 pb-1.5 ${sharedStyle}`}
      id={headerToId(children)}
      {...{ children }}
    />
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3
      className={`text-xl ${sharedStyle}`}
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
        <a href={'#' + headerToId(children)}>
          <FaLink
            className={`text-[16px] absolute -left-6 ${
              size == 'h3' ? 'top-1.5' : 'top-2'
            } group-hover:opacity-70 opacity-0`}
          />
        </a>

        {children}
      </El>
    )
  }
