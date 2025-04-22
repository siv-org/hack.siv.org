'use client'

import Script from 'next/script'

export const Tweet = ({
  tweetId,
  placeholder,
  username,
  author_name,
  date,
}: {
  tweetId: string
  placeholder: string
  username: string
  author_name: string
  date: string
}) => (
  <>
    <blockquote className="twitter-tweet border-2 border-gray-200 rounded-lg p-4">
      <p lang="en" dir="ltr" className="whitespace-pre-wrap">
        {placeholder}
      </p>
      &mdash; {author_name} (@{username}){' '}
      <a
        className="text-blue-400 hover:text-blue-500"
        href={`https://twitter.com/${username}/status/${tweetId}`}
      >
        {date}
      </a>
    </blockquote>

    <Script async src="https://platform.twitter.com/widgets.js" />
  </>
)
