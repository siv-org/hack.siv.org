'use client'

import sivVoteUI from '../public/images-for-decon-2024/screenshot-of-siv-voter-interface.png'
import { scaleWithAmbientLight } from './scaleWithAmbientLight'
import Image from 'next/image'

export const SIVVoteUIScreenshot = () => (
  <Image
    src={sivVoteUI}
    alt="Screenshot of SIV Vote UI"
    width={300}
    style={{ opacity: scaleWithAmbientLight(0.5, 0.85) }}
  />
)
