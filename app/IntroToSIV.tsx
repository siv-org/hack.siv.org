import { linkStyle } from './page'

export const IntroToSIV = () => {
  return (
    <div className="text-center space-y-12 mt-4">
      <p>
        The{' '}
        <a href="https://siv.org/" target="_blank" className={linkStyle}>
          Secure Internet Voting Protocol
        </a>{' '}
        (SIV) makes voting fast & easy, while ensuring an auditable voter roll,
        end-to-end voter verifiability, and strong privacy.
      </p>

      <p className="border-2 border-[#114852] rounded-lg p-4">
        Even if the worst actors are in charge of election infrastructure,
        anyone can verify whether the election was run fairly or not.
      </p>
    </div>
  )
}
