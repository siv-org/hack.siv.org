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
      <summary className="text-xl font-semibold opacity-90">
        {title}{' '}
        <span className="text-sm opacity-40 font-normal ml-2">
          ({readTime} min read)
        </span>
      </summary>
      {children}
    </details>
  )
}
