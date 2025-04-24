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
          ({readTime} min read)
        </span>
      </summary>
      <div className="pl-3 pb-6">{children}</div>

      {/* Custom css for nested details */}
      <style jsx global>{`
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
