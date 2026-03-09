'use client'

export const Details = ({
  children,
  title,
  readTime,
}: {
  children: React.ReactNode
  title: string
  readTime: number
}) => {
  return (
    <details className="Details">
      <summary className="text-[22px] font-medium cursor-pointer text-[#111827] leading-[1.5] mb-5">
        {title}{' '}
        <span className="text-[16.5px] opacity-50 font-normal ml-2 text-[#6b7280]">
          ({readTime}&nbsp;min&nbsp;read)
        </span>
      </summary>
      <div className="pl-3 pb-6">{children}</div>

      {/* Custom css for nested details + fixed-width arrow */}
      <style jsx global>{`
        .Details summary {
          list-style: none;
        }
        .Details summary::-webkit-details-marker {
          display: none;
        }
        .Details summary::before {
          content: '▶';
          display: inline-block;
          width: 1em;
          margin-right: 0.25em;
          transition: transform 0.2s ease;
        }
        .Details[open] summary::before {
          content: '▶';
          transform: rotate(90deg);
        }

        .Details .Details {
          margin-left: 15px;
        }

        .Details .Details summary {
          font-size: 19px !important;
        }
      `}</style>
    </details>
  )
}
