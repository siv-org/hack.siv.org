import { Box } from './2024defcon/Box'
import { FaGithub } from 'react-icons/fa'
import { SIVVoteUIScreenshot } from './2024defcon/SIVVoteUIScreenshot'
import { SignUpForUpdates } from './SignUpForUpdates'
import { IntroToSIV } from './IntroToSIV'
const deepTeal = '#114852'
const deepRed = 'rgb(92, 1, 1)'
export const linkStyle =
  'underline text-blue-400 text-opacity-80 font-semibold hover:text-opacity-100'

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col items-center p-6 pt-10 sm:p-24 space-y-20 sm:text-lg">
      <IntroToSIV />

      <SIVVoteUIScreenshot />

      {/* Background */}
      <Box title="BACKGROUND" color={deepTeal}>
        <div className="space-y-6 px-1 text-[17px]">
          <p>
            SIV is already being used for impactful elections, having elected
            legislators and executives at the local, state, and national levels.
          </p>
          <p>
            There are thousands more election administrators around the world,
            searching for truly secure, easy-to-use ways to allow citizens to
            vote and make their voices heard.
          </p>
          <p>But the bar for security is incredibly&nbsp;high.</p>
          <p>
            The threat model is adversarial Nation States, willing to expend
            military-sized budgets to seek any advantage available.
          </p>
          <p>
            We invite you to play a role in evaluating and strengthening
            democracy for millions of people around&nbsp;the&nbsp;world.
          </p>
        </div>
      </Box>

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
        <a className={linkStyle} target="_blank" href="mailto:hack@siv.org">
          hack@siv.org
        </a>
      </p>

      {/* Resources */}
      <div className="border-b pb-12 border-white/20">
        <h4 className="text-center font-bold mb-5 border-b pb-1 border-white/50">
          Hacking Resources
        </h4>
        {[
          ['Illustrated Guide to The SIV Protocol', 'https://siv.org/protocol'],
          ['SIV Documentation', 'https://docs.siv.org'],
          [
            'Known Security Issues',
            'https://github.com/siv-org/siv/issues?q=is%3Aissue+is%3Aopen+label%3Asecurity+',
          ],
          [
            'SIV Technical Specifications',
            'https://docs.siv.org/technical-specifications',
          ],
          ['The SIV Codebase', 'https://github.com/siv-org/siv'],
          ['Detailed Contest Rules', '/rules'],
          [
            'Public Questions Forum',
            'https://github.com/siv-org/siv/discussions',
          ],
        ].map(([text, link], i) => (
          <div className="mb-0.5" key={i}>
            <span className="opacity-50">{i + 1}.</span>{' '}
            <a href={link} target="_blank" className={linkStyle}>
              {text}
            </a>
          </div>
        ))}
      </div>

      <SignUpForUpdates />
    </main>
  )
}
