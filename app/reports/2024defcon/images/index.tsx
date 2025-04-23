import Image from 'next/image'

import AwardsProcessScreenshot from './awards-process.png'
import ReutersScreenshot from './reuters.png'
import EmailFromSecOfStateScreenshot from './EmailFromSecOfState.jpeg'
import EmailFromPublicVoteJudgeScreenshot from './EmailFromPublicVoteJudge.png'
import BuyVotes from './BuyVotes.png'

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

export const ReutersImage = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src={ReutersScreenshot}
      alt="reuters.com: Can online voting be secure? Experts in Las Vegas try to hack new platform"
      className="mx-auto"
      style={{ width: '100%', maxWidth: '386px' }}
    />
  </a>
)

export const EmailFromSecOfStateImage = () => (
  <Image
    src={EmailFromSecOfStateScreenshot}
    alt="Email from Secretary of State official"
    style={{ maxWidth: '386px' }}
    className="mx-auto w-full"
  />
)

export const EmailFromPublicVoteJudgeImage = () => (
  <Image
    src={EmailFromPublicVoteJudgeScreenshot}
    alt="Email from Public Vote Judge"
    style={{ maxWidth: '650px' }}
    className="mx-auto w-full"
  />
)

export const BuyVotesImage = ({ children }: { children?: React.ReactNode }) => (
  <div className="space-y-2">
    <Image
      src={BuyVotes}
      alt="Table of prize awards for mspecter-4"
      width={250}
      className="mx-auto"
    />
    {children && <div className="text-center text-base italic">{children}</div>}
  </div>
)
