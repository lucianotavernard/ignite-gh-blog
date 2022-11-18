import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'

export function Profile() {
  return (
    <section className="flex gap-8 w-full h-52 py-8 px-10 rounded-2xl bg-[#0B1B2B] shadow-lg">
      <img
        className="w-36 h-36 rounded-full object-cover"
        src="https://avatars.githubusercontent.com/u/19474041?v=4"
        alt=""
      />

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-2xl text-[#E7EDF4]">
            Luciano Tavernard
          </h1>

          <a
            className="transition-all flex items-center h-5 leading-5 border-b border-transparent uppercase text-[#3294F8] text-xs font-bold hover:border-[#3294F8]"
            href="https://github.com/lucianotavernard"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <ArrowSquareOut className="w-4 h-4 ml-2 " />
          </a>
        </header>

        <p className="text-base">
          {`I am a software engineer passionate about working with challenging\r\n
          projects and this entire programming ecosystem.`}
        </p>

        <ul className="flex flex-wrap gap-6 items-center mt-auto">
          <li className="flex gap-2 items-center">
            <GithubLogo className="text-lg text-[#3A536B]" />
            lucianotavernard
          </li>
          <li className="flex gap-2 items-center">
            <Buildings className="text-lg text-[#3A536B]" />
            Cloud++
          </li>
          <li className="flex gap-2 items-center">
            <Users className="text-lg text-[#3A536B]" />
            followers
          </li>
        </ul>
      </div>
    </section>
  )
}
