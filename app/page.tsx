import { Box } from './Box'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>This year debuting at</p>
        <p>DEFCON</p>
        <p>Voting Village</p>
      </div>

      <Box title="SIV" color="#060067">
        Secure Internet Voting’s (SIV.org) mission is to offer citizens the
        power of easily accessible, personally verifiable, private voting.
      </Box>

      <Box title="HACK SIV" color="#0600cc">
        <div className="space-y-2">
          <div className="bg-blue-400 rounded p-1">
            Participate in SIV demo-elections, thoroughly inspect the system, &
            identify any weaknesses or vulnerabilities.
          </div>
          <div className="bg-blue-400 rounded p-1">
            Our goal is to make the SIV Protocol (docs.siv.org) as secure as
            possible even for the highest-stakes presidential elections or
            referendums in war-zones.
          </div>
        </div>
      </Box>
    </main>
  )
}
