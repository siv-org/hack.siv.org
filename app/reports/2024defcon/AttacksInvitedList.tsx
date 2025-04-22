export const AttacksInvitedList = () => {
  const data = [
    {
      title: 'Vote multiple times',
      status: 'Not accomplished',
    },
    {
      title: "Change someone else's vote, without detection",
      status: 'Not Accomplished',
      explanation:
        'Although no one successfully accomplished this, one submission got partway by identifying a weakness in one of the anti-malware defensive layers. 2 solutions now identified.',
      more_details: 'Detailed Information → Top 3 Submissions Examined → No. 3',
    },
    {
      title: 'Destroy a vote already confirmed submitted',
      status: 'Not accomplished',
    },
    {
      title: 'Learn how someone voted, without their help',
      status:
        'One person showed impressive ways to directly install spyware on-device.',
      explanation:
        'The SIV Protocol defends against vote tampering by on-device malware, but it does not protect vote secrecy from compromised devices themselves. If an attacker controls the device, they can see everything a person does with it, including using SIV. While this was previously known and documented, the Voter Interface failed to clearly warn users.',
      more_details:
        'Detailed Information → Attacks Discussed But Not Submitted → On-Device Spyware',
    },
    {
      title: 'Learn other personal info about voters',
      status: 'Not accomplished',
    },
  ]

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
