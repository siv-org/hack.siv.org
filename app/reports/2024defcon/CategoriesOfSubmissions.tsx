export const CategoriesOfSubmissions = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (
    <div className="rounded-md p-6 bg-[#f8f9fa] mb-6">
      <h4 className="text-[1.1rem] font-semibold text-[#0d4795] mb-2">
        {title}
      </h4>
      <div className="opacity-70">{children}</div>
    </div>
  )
}
