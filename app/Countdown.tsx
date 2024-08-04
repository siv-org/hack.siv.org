'use client'

import ReactCountdown from 'react-countdown'

export const Countdown = () => (
  <div className="uppercase font-semibold">
    Submissions close in
    <ReactCountdown
      className="block text-center text-red-500 text-xl mt-1 font-mono"
      date={new Date('2024-08-11T10:00:00-07:00')}
    />
  </div>
)
