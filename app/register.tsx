'use client'

import React, { useState } from 'react'
import { MdOutlineNotificationsActive } from 'react-icons/md'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  return (
    <div className="w-full">
      <div className="rounded-t py-3 pl-3 bg-[#114852] font-semibold text-center flex items-center">
        <MdOutlineNotificationsActive className="inline relative text-[40px] pr-2" />
        <div className="pl-3 text-left">
          <div className="text-xl">
            {!success ? (
              'Signup for Invites'
            ) : (
              <>
                Signup successful<span className="ml-3">✅</span>
              </>
            )}
          </div>
          {!success && (
            <div className="font-light text-sm opacity-60">
              to mock elections & announcements
            </div>
          )}
        </div>
      </div>

      <form
        onSubmit={async (event: React.FormEvent) => {
          event.preventDefault()

          const body = JSON.stringify({ email })
          console.log({ body })
          await fetch('https://siv.org/api/hack-siv/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body,
          })
          setSuccess(true)
        }}
        className="flex"
      >
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setSuccess(false)
          }}
          className="p-3 rounded-bl-md border-2 border-r-0 border-gray-300/30 bg-white/10 w-full"
        />
        <button
          type="submit"
          disabled={!email || success}
          className="border-2 border-gray-300/30 hover:bg-gray-800 text-white/80 p-2 rounded-br-md disabled:cursor-not-allowed disabled:opacity-80"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
