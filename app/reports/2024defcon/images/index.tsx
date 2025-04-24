import Image from 'next/image'

import AwardsProcessScreenshot from './awards-process.png'
import ReutersScreenshot from './reuters.png'
import EmailFromSecOfStateScreenshot from './EmailFromSecOfState.jpeg'
import EmailFromPublicVoteJudgeScreenshot from './EmailFromPublicVoteJudge.png'
import BuyVotes from './BuyVotes.png'
import VerificationNumberScreenshot from './VerificationNumber.png'
import DEFCONBadgeInside from './defcon-badge-inside.jpg'
import DEFCONBadgeOutside from './defcon-badge-outside.jpeg'
import AntiVoteSellingAgreementImg from './anti-vote-selling.png'
import AnonymizationProcessGif from './anonymization.gif'
import BallotScreenshot from './ballot.png'
import BallotGIF from './ballot-ui-budget.gif'
import VoteConfirmation from './VoteConfirmationEmail.png'
import PrivacyComparisonScreenshot from './PrivacyComparison.png'
import RLAoptionsImg from './rla-options.png'
import SIVVoterInterface from './SIVVoterInterface.png'

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

export const VerificationNumberImage = () => (
  <Image
    src={VerificationNumberScreenshot}
    alt="Screenshot of Verification Number flow"
    className="mx-auto w-full"
  />
)

export const DEFCONBadgeOutsideImg = () => (
  <Image
    src={DEFCONBadgeOutside}
    alt="Photo of the outside of a DEFCON badge"
    className="mx-auto my-2 rounded-md"
    width={250}
  />
)

export const DEFCONBadgeInsideImg = () => (
  <Image
    src={DEFCONBadgeInside}
    alt="Photo of inside of a DEFCON badge"
    className="mx-auto my-2 rounded-md"
    width={250}
  />
)

export const AntiVoteSellingAgreement = () => (
  <Image
    src={AntiVoteSellingAgreementImg}
    alt="Screenshot of the Anti-Vote-Selling Agreement"
    className="mx-auto w-full"
  />
)

export const AnonymizationProcess = () => (
  <Image
    src={AnonymizationProcessGif}
    alt="Votes anonymization process"
    className="mx-auto w-full"
  />
)

export const BallotImg = () => (
  <Image
    src={BallotScreenshot}
    alt="Screenshot of the Election Ballot"
    className="mx-auto w-96 rounded-md"
  />
)

export const BallotUIGIF = () => (
  <Image
    src={BallotGIF}
    alt="GIF of Election Ballot"
    className="mx-auto w-80"
  />
)

export const VoteConfirmationImg = () => (
  <Image
    src={VoteConfirmation}
    alt="Email confirming voter verified their vote"
    className="mx-auto w-full border border-gray-300 rounded-md"
  />
)

export const PrivacyComparison = ({
  href,
  children,
}: {
  href: string
  children?: React.ReactNode
}) => (
  <div className="space-y-2">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={PrivacyComparisonScreenshot}
        alt="Comparison of privacy levels of existing voting systems"
        width={600}
        className="rounded-xl mx-auto"
      />
    </a>
    {children && <div className="text-center text-base italic">{children}</div>}
  </div>
)

export const RLAoptions = () => (
  <Image
    src={RLAoptionsImg}
    alt="Options for conducting Risk Limiting Audits"
    className="mx-auto"
    width={550}
  />
)

export const SIVVoterInterfaceImage = () => (
  <a
    href="https://hack.siv.org/images-for-decon-2024/screenshot-of-siv-voter-interface.png"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={SIVVoterInterface}
      alt="Screenshot of the SIV Voter Interface"
      className="mx-auto mt-8 sm:w-[240px]"
    />
  </a>
)
