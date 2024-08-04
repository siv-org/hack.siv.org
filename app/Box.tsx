import { ReactElement } from 'react'

export const Box = ({
  title,
  children,
  color,
}: {
  color: string
  title: string
  children: string | JSX.Element | (string | JSX.Element)[]
}) => {
  return (
    <div
      style={{ borderColor: color }}
      className="border rounded shadow-md hover:shadow-xl"
    >
      <h2
        style={{ backgroundColor: color }}
        className=" text-center text-[#FFF8F6] py-1.5 font-bold"
      >
        {title}
      </h2>
      <div className="text-center p-3">{children}</div>
    </div>
  )
}
