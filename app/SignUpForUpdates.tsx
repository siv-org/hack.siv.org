'use client'

import React, { useState } from 'react'
import { MdOutlineNotificationsActive } from 'react-icons/md'

export const SignUpForUpdates = () => {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <div className="rounded-t py-3 pl-3 bg-gradient-to-b from-gray-600/30 to-gray-600/5 text-center flex items-center justify-center">
        <MdOutlineNotificationsActive className="inline relative text-[40px] pr-2" />
        <div className="pl-3 text-left">
          <div className="text-lg">
            {!success ? (
              'Signup for future updates'
            ) : (
              <>
                Signup successful<span className="ml-3">✅</span>
              </>
            )}
          </div>
        </div>
      </div>

      <form
        onSubmit={async (event: React.FormEvent) => {
          event.preventDefault()

          setSubmitting(true)
          const response = await fetch(
            'https://siv.org/api/hack-siv/register',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({ email }),
            }
          )
          setSubmitting(false)
          if (response.ok) setSuccess(true)
        }}
        className="flex"
      >
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value)
            setSuccess(false)
          }}
          className="p-3 pl-4 rounded-bl-md border-2 border-gray-600/40 w-full focus:border-gray-600 bg-black/70 outline-none"
        />
        <button
          type="submit"
          disabled={!email || success}
          className="w-48 border-2 border-l-0 border-gray-500/40 hover:bg-grey-200
         text-white p-2 rounded-br-md disabled:cursor-not-allowed disabled:opacity-80"
        >
          Submit{submitting ? 'ting...' : success && 'ted.'}
        </button>
      </form>
    </div>
  )
}
