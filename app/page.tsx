import { Box } from './Box'
import goodLuck from './images/good-luck.png'
import defCON from './images/dc32-logo-2color-halftonegradient.webp'
import VV from './images/votingvillage.png'
import Image from 'next/image'
import { Countdown } from './Countdown'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { FaSignalMessenger } from 'react-icons/fa6'

import { SIVVoteUIScreenshot } from './SIVVoteUIScreenshot'

import { Register } from './register'

const deepTeal = '#114852'
const deepRed = 'rgb(92, 1, 1)'
const linkStyle =
  'underline text-blue-400 text-opacity-80 font-semibold hover:text-opacity-100'

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col items-center p-6 pt-10 sm:p-24 space-y-12 sm:text-lg">
      {/* Now Open! header */}
      <div className="text-center">
        <p className="italic mb-3 opacity-60">NOW OPEN &nbsp;@</p>
        <div className="flex sm:flex-row flex-col items-center space-x-5">
          <Image
            src={defCON}
            alt="DEF CON logo"
            width={200}
            className="opacity-70"
          />
          <Image
            src={VV}
            alt="Voting Village logo"
            width={200}
            className="opacity-80 mt-3"
          />
        </div>

        <h5 className="italic mt-3">and online ;)</h5>
      </div>

      {/* Intro to SIV */}
      <Box title="HACK SIV" color={deepTeal}>
        Internet voting system designed for{' '}
        <b>government-grade election security</b>, with mathematically provable
        privacy & vote verifiability.
      </Box>

      <SIVVoteUIScreenshot />

      {/* YOUR CHALLENGE */}
      <Box
        title={
          <div className="text-sm tracking-widest py-1">
            <div className="opacity-50 mb-0.5">YOUR CHALLENGE:</div>
            <div className="opacity-90">FIND VULNERABILITIES</div>
          </div>
        }
        color={deepRed}
      >
        <span className="font-semibold">$10,000 in prizes</span>
      </Box>

      <Countdown />

      {/* <div>FIXME Get Notified Component</div> */}

      {/* Attack Goals */}
      <div className="space-y-1.5 mb-0">
        <h3 className="text-[18px] sm:text-xl font-bold mb-5">
          Can you find novel ways to ....?
        </h3>
        {[
          'Vote multiple times',
          "Change someone else's vote, without detection",
          'Destroy a vote already confirmed submitted',
          'Learn how someone voted, without their help',
          'Learn other personal info about voters',
        ].map((text, i) => (
          <div key={i}>
            <b className="opacity-50">{i + 1})</b> {text}
          </div>
        ))}
      </div>

      {/* Bonus Goal */}
      <div className="!mt-4 text-center">
        <i className="opacity-50">Bonus: </i>Convince us of major score updates
        to{' '}
        <a
          className={linkStyle}
          href="https://docs.siv.org/compare"
          target="_blank"
        >
          docs.siv.org/compare
        </a>
      </div>

      {/* Especially interested in Protocol vulnerabilities */}
      <div className="border p-4 rounded border-white/30 text-center">
        We are especially interested in attacks against{' '}
        <span className="inline-block">
          <a
            className={linkStyle}
            href="https://docs.siv.org/technical-specifications"
            target="_blank"
          >
            the SIV Protocol
          </a>
          ,
        </span>{' '}
        not just{' '}
        <span className="inline-block">
          <FaGithub className="inline mr-1.5 relative bottom-0.5 ml-1 text-[22px]" />
          <a
            className={linkStyle}
            href="https://github.com/siv-org/siv"
            target="_blank"
          >
            the current implementation
          </a>
        </span>
        .
      </div>

      {/* Found a vuln? */}
      <Box color={deepRed} title={'Found a vulnerability?'}>
        Submit it to the public repo:{' '}
        <a
          className={`${linkStyle} !text-white/80 hover:!text-white/100`}
          target="_blank"
          href="https://github.com/siv-org/siv/issues"
        >
          github.com/siv-org/siv/issues
        </a>
      </Box>
      {/* Or email */}
      <p className="!mt-3 text-sm">
        Or email:{' '}
        <a className={linkStyle} target="_blank" href="mailto:defcon@siv.org">
          defcon@siv.org
        </a>
      </p>

      {/* Committed to $10k */}
      <div className="text-xl text-center">
        <h3 className="text-center font-bold">
          SIV is committed to awarding the full $10k in prizes
        </h3>
        <h4 className="italic text-center !mt-0.5 text-sm opacity-50">
          even if submission quality is low.
        </h4>

        <h3 className="mt-4 text-lg">
          The only question is <i className="font-bold">to whom</i>?
        </h3>
      </div>

      {/* 2-col Awards Process */}
      <Box title="HACK SIV Awards Process" color="#114852">
        <div className="flex relative text-sm">
          {/* Left side */}
          <div className="sm:px-2 px-1 w-1/2">
            <h4>1/2</h4>
            <h3 className="inline-block px-1 bg-green-200/70 text-black/80 py-0.5 my-2">
              The SIV Team{"'"}s
            </h3>
            <h4>Favorite Submissions</h4>

            <div className="mt-12 min-[381px]:mt-8 space-y-6 text-left">
              <div>
                <span className="opacity-60 font-light">
                  We{"'"}ll share our current favorites, in&nbsp;
                </span>
                real&nbsp;time
              </div>
              <div className="font-bold">
                <span className="opacity-60 font-light">See </span>
                <a
                  href="https://gist.github.com/dsernst/26b1966dd61183ad256b881d2e51185e#awarding-prizes"
                  target="_blank"
                  className={linkStyle}
                >
                  Our Judgement Criteria
                </a>
              </div>
              <div className="font-bold">
                First-to-Post{' '}
                <span className="opacity-60 font-light">qualifies</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="border-l border-dashed border-green-200/40 sm:px-2 px-1 w-1/2">
            <h4>1/2</h4>
            <h3 className="inline-block px-2 bg-green-200/70 text-black/80 py-0.5 my-2">
              Public Vote
            </h3>

            <h4 className="text-[13px] leading-4 mt-0.5">
              Open to Anyone In-person @&nbsp;DEF&nbsp;CON&nbsp;{"'"}24
            </h4>

            <div className="font-bold mt-4 space-y-6 text-right">
              <div className="pb-5 min-[388px]:pb-0">
                Sunday Aug 11
                <div className="text-sm font-light opacity-60">
                  end of DEF CON
                </div>
              </div>

              <div>
                <div className="italic font-light text-sm opacity-60">
                  rm -rf any_criteria
                </div>
                The People Decide
              </div>

              <div>
                Run using SIV itself
                <div className="opacity-60 text-sm font-light">hackable??!</div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      {/* Detailed Contest Rules btn */}
      <a
        href="https://gist.github.com/dsernst/26b1966dd61183ad256b881d2e51185e#file-defcon-prize-awards-md"
        target="_blank"
        className="bg-orange-300 bg-opacity-80 text-black/90 px-4 py-2 rounded hover:bg-opacity-100"
      >
        See{' '}
        <b>
          Detailed Contest Rules{' '}
          <FiExternalLink className="inline relative bottom-[3px] text-[25px]" />
        </b>
      </a>

      {/* Next Steps */}
      <div>
        <h4 className="text-center font-bold">Next Steps</h4>

        <ol className="mt-5 space-y-0.5">
          <li>
            <span className="opacity-50">1. </span>
            <a
              className={linkStyle}
              target="_blank"
              href="https://signal.group/#CjQKICsvJxvIn78MHOVlLHyyDZZzRZ6jG62baU0PSvNytGixEhB_0dk6RSLBFcK9o63Qlpx0"
            >
              Join the{' '}
              <FaSignalMessenger className="inline relative bottom-0.5 ml-0.5" />{' '}
              Signal group
            </a>
          </li>
          <li>
            <span className="opacity-50">2. </span>Signup for updates for:
            <div className="pl-5 opacity-80">
              invitations to mock elections, other important announcements, &
              reminders
            </div>
          </li>
        </ol>
      </div>

      <Register />

      {/* Resources */}
      <div>
        <h4 className="text-center font-bold mb-5">Resources</h4>

        {[
          ['The SIV codebase', 'https://github.com/siv-org/siv'],
          ['The SIV Docs', 'https://docs.siv.org'],
          ['Illustrated Guide to The SIV Protocol', 'https://siv.org/protocol'],
          [
            'Known Security Issues',
            'https://github.com/siv-org/siv/issues?q=is%3Aissue+is%3Aopen+label%3Asecurity+',
          ],
          // ['HACK SIV Schedule', '/schedule'],
          [
            'Detailed Contest Rules',
            'https://gist.github.com/dsernst/26b1966dd61183ad256b881d2e51185e#file-defcon-prize-awards-md',
          ],
          ['Online Q&A Forum', 'https://github.com/siv-org/siv/discussions'],
        ].map(([text, link], i) => (
          <div className="mb-0.5" key={i}>
            <span className="opacity-50">{i + 1}.</span>{' '}
            <a href={link} target="_blank" className={linkStyle}>
              {text}
            </a>
          </div>
        ))}
      </div>

      {/* About SIV */}
      <Box color={deepTeal} title="About SIV">
        <a href="https://siv.org" target="_blank" className={linkStyle}>
          SIV{"'"}s
        </a>{' '}
        mission is to enable accessible & verifiable digital infrastructure for
        civil society.
      </Box>

      {/* About Voting Village */}
      <Box color={deepTeal} title="About the Voting Village">
        The{' '}
        <a
          href="https://www.votingvillage.org"
          target="_blank"
          className={linkStyle}
        >
          Voting Village
        </a>{' '}
        is the world{"'"}s premier venue for uncovering weaknesses in the
        technology that run our elections.
        <div className="mt-3 text-sm italic opacity-70">
          The Voting Village supports SIV{"'"}s commitment to transparency &
          security, but takes no responsibility for any poor decisions they make
          with this contest.
        </div>
      </Box>

      {/* About DEF CON */}
      <Box color={deepTeal} title="About DEF CON">
        <a href="https://defcon.org" target="_blank" className={linkStyle}>
          DEF CON
        </a>{' '}
        is the world{"'"}s largest hacking convention, attracting 30,000
        Information Security specialists to Las Vegas every year.
      </Box>

      <Countdown />

      {/* Good luck! */}
      <Image
        src={goodLuck}
        alt="Good Luck sign"
        width={200}
        className="opacity-70"
      />
    </main>
  )
}
