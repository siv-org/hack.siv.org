import Image from 'next/image'

import AwardsProcessScreenshot from './awards-process.png'

export const AwardsProcessImage = ({
  children,
}: {
  children?: React.ReactNode
}) => (
  <div className="space-y-2">
    <Image
      src={AwardsProcessScreenshot}
      alt="Awards Process"
      width={600}
      className="rounded-xl mx-auto"
    />
    {children && <div className="text-center text-base italic">{children}</div>}
  </div>
)
