export const Testimonial = ({
  author,
  secondLine,
  thirdLine,
  children,
}: {
  author: string
  secondLine?: React.ReactNode
  thirdLine?: string
  children: React.ReactNode
}) => {
  return (
    <div className="bg-gray-50 p-12 rounded-sm shadow-lg mb-6 border-l-4 border-blue-500">
      {children}
      <div className=" text-base text-right mt-4 text-slate-500 italic">
        <div>— {author}</div>
        {secondLine && <div className="text-base italic">{secondLine}</div>}
        {thirdLine && <div className="text-base italic">{thirdLine}</div>}
      </div>
    </div>
  )
}
