export const linkStyle =
  'underline text-blue-400 text-opacity-80 font-semibold hover:text-opacity-100'

export const IntroToSIV = () => {
  return (
    <div className="text-center space-y-8 text-lg">
      <p className="sm:text-xl leading-relaxed">
        The{' '}
        <a href="https://siv.org/" target="_blank" className={linkStyle}>
          SIV Protocol
        </a>{' '}
        makes voting fast & easy, while ensuring an auditable voter roll,
        end-to-end voter verifiability, and strong privacy.
      </p>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#114852]/20 to-[#114852]/13" />
        <p className="border-2 border-[#114852] rounded-lg p-6 font-medium bg-black/20">
          Even if the <b>worst actors</b> are in charge of election
          infrastructure, anyone can verify whether the election was run fairly
          or not.
        </p>
      </div>
    </div>
  )
}
