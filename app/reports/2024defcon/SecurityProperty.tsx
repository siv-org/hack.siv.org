'use client'

import { useState } from 'react'

export const SecurityProperty = ({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: string[]
}) => {
  const [open, setOpen] = useState(false)

  return (
    <details
      className="bg-slate-100/50 rounded-lg SecurityProperty mb-8"
      open={open}
    >
      {/* Summary when closed */}
      <summary
        className="list-none flex justify-between items-start sm:flex-row flex-col cursor-pointer p-8"
        onClick={(event) => {
          event.preventDefault()
          setOpen(!open)
        }}
      >
        <div className="flex-1 flex items-start flex-col justify-start text-left">
          <h3 className="text-xl font-medium mb-4">{title}</h3>
          <p className="text-medium text-gray-400">{description}</p>
        </div>
        <button className="text-medium text-gray-500/90 border border-slate-600/30 hover:bg-slate-800/10 active:bg-slate-800/20 transition-all rounded-lg px-4 py-2 mt-8 sm:mt-2">
          {open ? 'Hide Details' : 'Show Details'}
        </button>
      </summary>

      {/* Details when open */}
      <div className="p-8">
        <ol className="mt-4 list-decimal ml-6 grid sm:grid-cols-2 gap-x-20 gap-y-4 font-light">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>

      {/* Custom css */}
      <style jsx global>{`
        /* Below for safari, list-none works for others */
        .SecurityProperty summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </details>
  )
}
