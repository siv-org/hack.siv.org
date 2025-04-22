import Image from 'next/image'

import AwardsProcessScreenshot from './awards-process.png'

export const AwardsProcessImage = () => (
  <Image
    src={AwardsProcessScreenshot}
    alt="Awards Process"
    width={600}
    className="rounded-xl mx-auto"
  />
)
