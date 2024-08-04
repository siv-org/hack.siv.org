import { Box } from './Box'
import sivVoteUI from '../public/images-for-decon-2024/screenshot-of-siv-voter-interface.png'
import goodLuck from './images/good-luck.png'
import defCON from './images/defcon.jpg'
import VV from './images/votingvillage.png'
import Image from 'next/image'

const deepTeal = '#114852'
const deepRed = 'rgb(92, 1, 1)'
const linkStyle =
  'underline text-blue-400 text-opacity-80 font-semibold hover:text-opacity-100'

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col items-center p-6 pt-10 sm:p-24 space-y-12 sm:text-lg">
      <div className="text-center">
        <p className="italic mb-3 opacity-60">NOW OPEN &nbsp;@</p>
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

        <h5 className="italic mt-3">and online ;)</h5>
      </div>

      <Box title="HACK SIV" color={deepTeal}>
        Internet voting system designed for{' '}
        <b>government-grade election security</b>, with mathematically provable
        privacy & vote verifiability.
      </Box>

      <Image
        src={sivVoteUI}
        alt="Screenshot of SIV Vote UI"
        width={300}
        className="opacity-50"
      />

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

      {/* <div>FIXME Get Notified Component</div> */}

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

      <div className="!mt-4 text-center">
        <i className="opacity-50">Bonus: </i>Convince us of major score updates
        to{' '}
        <a className={linkStyle} href="docs.siv.org/compare" target="_blank">
          docs.siv.org/compare
        </a>
      </div>

      <div className="border p-4 rounded border-white/30 text-center">
        We are especially interested in attacks against{' '}
        <a
          className={linkStyle}
          href="https://docs.siv.org/technical-specifications"
          target="_blank"
        >
          the SIV Protocol
        </a>
        , not just{' '}
        <a
          className={linkStyle}
          href="https://github.com/siv-org/siv"
          target="_blank"
        >
          the current implementation
        </a>
        .
      </div>

      <Box color={deepRed} title={'Found a vulnerability?'}>
        Submit it to the public repo:{' '}
        <a
          className={`${linkStyle} !text-white/80`}
          target="_blank"
          href="https://github.com/siv-org/siv/issues"
        >
          github.com/siv-org/siv/issues
        </a>
      </Box>
      <p className="!mt-3 text-sm">
        Or email:{' '}
        <a className={linkStyle} target="_blank" href="mailto:defcon@siv.org">
          defcon@siv.org
        </a>
      </p>

      <div className="text-xl text-center">
        <h3 className="text-center font-bold">
          SIV is committed to awarding the full $10k in prizes
        </h3>
        <h4 className="italic text-center !mt-0.5 text-sm opacity-50">
          even if you rascals can{"'"}t come up with anything good.
        </h4>

        <h3 className="mt-4 text-lg">
          The only question is <i className="font-bold">to whom</i>?
        </h3>
      </div>

      <Box title="HACK SIV Awards Process" color="#114852">
        <div className="flex relative text-sm">
          {/* Left side */}
          <div className="sm:px-2 px-1 w-1/2">
            <h4>1/2</h4>
            <h3 className="inline-block px-1 bg-green-200/70 text-black/80 py-0.5 my-2">
              The SIV Team{"'"}s
            </h3>
            <h4>Favorite Submissions</h4>

            <div className="mt-6 space-y-6 text-left">
              <div>We{"'"}ll share our current favorites, in real time</div>
              <div className="font-bold">
                See our{' '}
                <a
                  href="https://gist.github.com/dsernst/26b1966dd61183ad256b881d2e51185e#awarding-prizes"
                  target="_blank"
                  className={linkStyle}
                >
                  Judgement Criteria
                </a>
              </div>
              <div className="font-bold">
                First-to-discover eligible only
                <i className="block italic text-sm font-light opacity-60">
                  so chop chop
                </i>
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

      <a
        href="https://gist.github.com/dsernst/26b1966dd61183ad256b881d2e51185e#file-defcon-prize-awards-md"
        target="_blank"
        className="bg-orange-300 text-black/90 px-4 py-2 rounded"
      >
        See <b>Detailed Contest Rules</b>
      </a>

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
              Join the Signal group
            </a>
          </li>
          <li>
            <span className="opacity-50">2. </span>Signup for updates for:
            <div className="pl-5 opacity-80">
              invitations to test elections, other important announcements, &
              reminders
            </div>
          </li>
        </ol>
      </div>

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

      <Box color={deepTeal} title="About SIV">
        <a href="https://siv.org" target="_blank" className={linkStyle}>
          SIV{"'"}s
        </a>{' '}
        mission is to enable accessible & verifiable digital infrastructure for
        civil society.
      </Box>
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
        technology that runs our elections.
        <div className="mt-3 text-sm italic opacity-70">
          The Voting Village supports SIV{"'"}s commitment to transparency &
          security, but takes no responsibility for any poor decisions they make
          with this contest.
        </div>
      </Box>
      <Box color={deepTeal} title="About DEF CON">
        <a href="https://defcon.org" target="_blank" className={linkStyle}>
          DEF CON
        </a>{' '}
        is the world{"'"}s largest hacking conference, hosting 30,000
        Information Security specialists in Las Vegas every year.
      </Box>

      <div className="uppercase font-semibold">
        Submissions close in
        <div className="text-center text-red-600 mt-1">7 days</div>
      </div>

      <Image
        src={goodLuck}
        alt="Good Luck sign"
        width={200}
        className="opacity-70"
      />
    </main>
  )
}
