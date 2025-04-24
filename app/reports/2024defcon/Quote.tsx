export const Quote = ({
  author,
  children,
}: {
  author: string
  children: React.ReactNode
}) => (
  <div className="font-light text-center text-base italic text-slate-800 my-20 relative max-w-xl mx-auto px-6">
    {children}
    <span className="text-sm">— {author}</span>

    <div className="absolute -top-1 text-4xl -left-2 text-slate-300">
      &ldquo;
    </div>
    <div className="absolute bottom-2 text-4xl -right-2 text-slate-300">
      &rdquo;
    </div>
  </div>
)
