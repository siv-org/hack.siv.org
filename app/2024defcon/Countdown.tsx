'use client'

import ReactCountdown from 'react-countdown'

export const Countdown = () => (
  <div className="uppercase font-semibold">
    Submissions close in
    <div className="text-center text-red-500 text-xl mt-1 font-mono">
      <ReactCountdown
        date={new Date('2024-08-11T10:00:00-07:00')}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) return 'CLOSED'

          return [
            [days, 'd'],
            [hours, 'h'],
            [minutes, 'm'],
            [seconds, 's'],
          ].map(([timeLeft, label], i) => (
            <span key={label}>
              {/* colon separator */}
              {i > 0 && <span className="opacity-50 mr-1">:</span>}

              {/* minutes and seconds should include leading 0 */}
              {String(timeLeft).padStart(i > 1 ? 2 : 1, '0')}

              {/* unit label */}
              <span className="mx-1 text-[18px]">{label}</span>
            </span>
          ))
        }}
      />
    </div>
  </div>
)
