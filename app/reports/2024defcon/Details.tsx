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
    <details>
      <summary className="text-[22px] font-medium cursor-pointer text-[#111827] leading-[1.5] mb-5">
        {title}{' '}
        <span className="text-[16.5px] opacity-50 font-normal ml-2 text-[#6b7280]">
          ({readTime} min read)
        </span>
      </summary>
      {children}
    </details>
  )
}
