'use client'

import React, { useState } from 'react'
import { MdOutlineNotificationsActive } from 'react-icons/md'

export const Register = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert(`Email submitted: ${email}`)
    setEmail('') // Reset the input after submission
  }

  return (
    <div className="w-full">
      <div className="rounded-t py-3 pl-3 bg-[#114852] font-semibold text-center flex items-center">
        <MdOutlineNotificationsActive className="inline relative text-[40px] pr-2" />
        <div className="pl-3 text-left">
          <div className="text-xl">Get notified</div>
          <div className="font-light text-sm opacity-60">
            of announcements & mock-elections
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-bl-md border-2 border-r-0 border-gray-300/30 bg-white/10 w-full"
        />
        <button
          type="submit"
          className="border-2 border-gray-300/30 hover:bg-gray-800 text-white/80 p-2 rounded-br-md"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
