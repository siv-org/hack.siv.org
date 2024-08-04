import { Box } from './Box'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 space-y-8">
      <div className="text-center">
        <p>NOW OPEN @</p>
        <p>DEFCON</p>
        <p>Voting Village</p>
        <p>and online ;)</p>
      </div>

      <Box title="HACK SIV" color="#060067">
        Internet voting system designed for{' '}
        <b>government-grade election security</b>, with mathematically provable
        privacy & vote verifiability.
      </Box>

      <Box
        title={
          <>
            <div>YOUR CHALLENGE:</div>
            <div>FIND VULNERABILITIES</div>
          </>
        }
        color="#0600cc"
      >
        $10,000 in prizes
      </Box>

      <div>FIXME Get Notified Component FIXME</div>

      <div>
        <h3>Can you find novel ways to ....?</h3>
        {[
          'Vote multiple times',
          "Change someone else's vote, without detection",
          'Destroy a vote already confirmed submitted',
          'Learn how someone voted, without their help',
          'Learn other personal info about voters',
        ].map((text, i) => (
          <div key={i}>
            <b>{i + 1})</b> {text}
          </div>
        ))}
      </div>

      <div>
        <i>Bonus</i>: Convince us of major score updates to{' '}
        <a href="docs.siv.org/compare" target="_blank">
          docs.siv.org/compare
        </a>
      </div>

      <div>
        We are especially interested in attacks against the SIV Protocol, not
        just the current implementation
      </div>

      <Box color="red" title={'Found a vulnerability?'}>
        Submit it to the public repo:{' '}
        <a>https://github.com/siv-org/siv/issues</a>
      </Box>
      <p>Or email: defcon@siv.org</p>

      <h3>SIV is committed to awarding the full $10k in prizes</h3>
      <h4>
        even if you jabroni{"'"}s can{"'"}t come up with anything good.
      </h4>

      <Box title="HACK SIV Awards Process" color="#060067">
        <div>
          <div>
            <h4>1/2</h4>
            <h3>The SIV Team{"'"}s</h3>
            <h4>Favorite Submissions</h4>

            <div>We{"'"}ll share our current favorites, in real time</div>
            <div>See our Judgement Criteria</div>
            <div>
              First-to-discover eligible only
              <i>so chop chop</i>
            </div>
          </div>
          <div>
            <h4>1/2</h4>
            <h3>Public Vote</h3>

            <h4>Open to Anyone In-person @ DEF CON</h4>

            <div>
              Sunday Aug 11
              <div>end of DEF CON</div>
            </div>

            <div>
              <div>rm -rf any_criteria</div>
              The People Decide
            </div>

            <div>
              Run using SIV itself
              <span>hackable??!</span>
            </div>
          </div>
        </div>
      </Box>

      <a>See Detailed Contest Rules</a>

      <div>
        <h4>Next Steps</h4>

        <div>
          <li>1. Join the Signal group</li>
          <li>
            2. Signup for updates for:
            <div>
              invitations to test elections & other important announcements &
              reminders
            </div>
          </li>
        </div>
      </div>

      <div>
        <h4>Resources</h4>

        {[
          'The SIV codebase',
          'The SIV Docs',
          'Illustrated Guide to The SIV Protocol',
          'Known Security Issues',
          'HACK SIV Schedule',
          'Detailed Contest Rules',
          'Q&A Discussions',
        ].map((text, i) => (
          <div key={i}>
            <b>{i + 1})</b> {text}
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
