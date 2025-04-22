export const AttacksInvitedList = ({
  data,
}: {
  data: {
    title: string
    status: string
    explanation?: string
    more_details?: string
  }[]
}) => {
  return (
    <ol className="shadow-lg p-8 sm:pl-8 pl-4 border border-gray-100 rounded-lg list-decimal list-inside font-light leading-7">
      {data.map(({ title, status, explanation, more_details }, index) => (
        <li key={title} className="mb-6 flex">
          <div className="w-6 text-center text-white bg-[#1a5fb4] rounded-full h-6 flex items-center justify-center text-sm">
            {index + 1}
          </div>
          <div className="ml-4 flex-1">
            <div className="text-[1.1rem]">
              <strong className="font-semibold">{title}</strong> —{' '}
              <span className="text-emerald-600">{status}</span>
            </div>
            <div className="text-[#666] text-[0.95rem]">
              {explanation && <div className="mt-2">{explanation}</div>}
              {more_details && (
                <div className="mt-1">
                  More info below at <i>{more_details}</i>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
