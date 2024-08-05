'use client'

import React, { useState } from 'react'

export const Register: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert(`Email submitted: ${email}`)
    setEmail('') // Reset the input after submission
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded-l-md border-2 border-r-0 border-gray-300"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md"
      >
        Submit
      </button>
    </form>
  )
}
