import { Box } from './Box'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 pt-10 sm:p-24 space-y-8">
      <div className="text-center">
        <p className="italic mb-3 opacity-60">NOW OPEN &nbsp;@</p>
        <h4 className="text-3xl font-bold">DEFCON</h4>
        <h4 className="text-3xl font-semibold text-blue-400">Voting Village</h4>
        <h5 className="italic mt-3">and online ;)</h5>
      </div>

      <Box title="HACK SIV" color="#114852">
        Internet voting system designed for{' '}
        <b>government-grade election security</b>, with mathematically provable
        privacy & vote verifiability.
      </Box>

      <Box
        title={
          <div className="text-sm tracking-widest py-1">
            <div className="opacity-50 mb-0.5">YOUR CHALLENGE:</div>
            <div className="opacity-90">FIND VULNERABILITIES</div>
          </div>
        }
        color="darkred"
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
        <i className="opacity-50">Bonus</i>: Convince us of major score updates
        to{' '}
        <a
          className="underline text-blue-400 font-semibold"
          href="docs.siv.org/compare"
          target="_blank"
        >
          docs.siv.org/compare
        </a>
      </div>

      <div className="border p-4 rounded border-white/30 text-center">
        We are especially interested in attacks against{' '}
        <a
          className="underline text-blue-400 font-semibold"
          href="https://docs.siv.org/technical-specifications"
          target="_blank"
        >
          the SIV Protocol
        </a>
        , not just{' '}
        <a
          className="underline text-blue-400 font-semibold"
          href="https://github.com/siv-org/siv"
          target="_blank"
        >
          the current implementation
        </a>
        .
      </div>

      <Box color="darkred" title={'Found a vulnerability?'}>
        Submit it to the public repo:{' '}
        <a
          className="underline text-blue-400 font-semibold"
          target="_blank"
          href="https://github.com/siv-org/siv/issues"
        >
          github.com/siv-org/siv/issues
        </a>
      </Box>
      <p className="!mt-3 text-sm">
        Or email:{' '}
        <a
          className="underline text-blue-400 font-semibold"
          target="_blank"
          href="mailto:defcon@siv.org"
        >
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
          <div className="px-p w-1/2">
            <h4>1/2</h4>
            <h3 className="inline-block px-1 bg-green-200 text-black/80 py-0.5 my-2">
              The SIV Team{"'"}s
            </h3>
            <h4>Favorite Submissions</h4>

            <div className="mt-6 space-y-6 text-left">
              <div>We{"'"}ll share our current favorites, in real time</div>
              <div className="font-bold">
                See our{' '}
                <a href="" className="underline text-blue-400 font-semibold">
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
          <div className="border-l border-dashed border-green-200/40 px-1 w-1/2">
            <h4>1/2</h4>
            <h3 className="inline-block px-2 bg-green-200 text-black/80 py-0.5 my-2">
              Public Vote
            </h3>

            <h4 className="text-[13px] leading-4 mt-0.5">
              Open to Anyone In-person @ DEF&nbsp;CON&nbsp;{"'"}24
            </h4>

            <div className="font-bold mt-4 space-y-6 text-right">
              <div className="pb-5">
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
        href="https://gist.github.com/dsernst/26b1966dd61183ad256b881d2e51185e"
        target="_blank"
        className="bg-orange-200 text-black/90 px-4 py-2 rounded"
      >
        See <b>Detailed Contest Rules</b>
      </a>

      <div>
        <h4 className="text-center font-bold">Next Steps</h4>

        <ol className="mt-5 space-y-0.5">
          <li>
            <span className="opacity-50">1. </span>
            <a
              className="underline text-blue-400 font-semibold"
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
          'The SIV codebase',
          'The SIV Docs',
          'Illustrated Guide to The SIV Protocol',
          'Known Security Issues',
          'HACK SIV Schedule',
          'Detailed Contest Rules',
          'Q&A Discussions',
        ].map((text, i) => (
          <div className="mb-0.5" key={i}>
            <span className="opacity-50">{i + 1}.</span> {text}
          </div>
        ))}
      </div>

      <Box color="blue" title="About SIV">
        SIV’s mission is to enable accessible & verifiable digital
        infrastructure for civil society.
      </Box>
      <Box color="blue" title="About the Voting Village">
        The Voting Village is world’s premier venue for uncovering weaknesses in
        the technology that runs our elections.
      </Box>
      <Box color="blue" title="About DEF CON">
        DEF CON is the world’s largest hacking conference, hosting 30,000
        Information Security specialists in Las Vegas every year.
      </Box>

      <div>
        Submissions close in
        <div>9 days</div>
      </div>

      <h3>Good luck! 🍀</h3>
    </main>
  )
}
