export const Testimonial = ({
  author,
  secondLine,
  thirdLine,
  children,
}: {
  author: string
  secondLine?: string
  thirdLine?: string
  children: React.ReactNode
}) => {
  return (
    <div className="bg-gray-50 p-12 rounded-sm shadow-lg mb-6 border-l-4 border-blue-500">
      {children}
      <div className="text-right mt-4">
        <div className="text-lg italic">— {author}</div>
        {secondLine && <div className="text-base italic">{secondLine}</div>}
        {thirdLine && <div className="text-base italic">{thirdLine}</div>}
      </div>
    </div>
  )
}
