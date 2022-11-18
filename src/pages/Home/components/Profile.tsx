import { useUser } from '@/services/hooks/useUser'

import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'

export function Profile() {
  const { data, isLoading } = useUser()

  if (isLoading || !data) {
    return (
      <section className="flex gap-8 w-full h-52 py-8 px-10 rounded-2xl bg-[#0B1B2B] shadow-lg">
        <div className="w-36 h-36 rounded-lg object-cover">
          <span className="block w-full h-full rounded-lg bg-gray-500 animate-pulse"></span>
        </div>

        <div className="flex-1 flex flex-col">
          <header className="flex justify-between items-center mb-2">
            <h1 className="w-1/2 h-6">
              <span className="block w-full h-full rounded-sm bg-gray-500 animate-pulse"></span>
            </h1>

            <span className="flex items-center">
              <span className="block w-16 h-5 mr-1 rounded-sm bg-gray-500 animate-pulse"></span>
              <ArrowSquareOut className="text-lg" />
            </span>
          </header>

          <p className="w-full mt-2 text-base line-clamp-3">
            <span className="block w-full h-4 mb-1 rounded-sm bg-gray-500 animate-pulse"></span>
            <span className="block w-full h-4 mb-1 rounded-sm bg-gray-500 animate-pulse"></span>
            <span className="block w-1/2 h-4 mb-1 rounded-sm bg-gray-500 animate-pulse"></span>
          </p>

          <ul className="flex flex-wrap gap-6 items-center mt-auto">
            <li className="flex gap-2 items-center">
              <GithubLogo className="text-lg text-[#3A536B]" />
              <span className="block w-20 h-4 rounded-sm bg-gray-500 animate-pulse"></span>
            </li>
            <li className="flex gap-2 items-center">
              <Buildings className="text-lg text-[#3A536B]" />
              <span className="block w-20 h-4 rounded-sm bg-gray-500 animate-pulse"></span>
            </li>
            <li className="flex gap-2 items-center">
              <Users className="text-lg text-[#3A536B]" />
              <span className="block w-20 h-4 rounded-sm bg-gray-500 animate-pulse"></span>
            </li>
          </ul>
        </div>
      </section>
    )
  }

  return (
    <section className="flex gap-8 w-full h-52 py-8 px-10 rounded-2xl bg-[#0B1B2B] shadow-lg">
      <img
        className="w-36 h-36 rounded-lg object-cover"
        src={data.user.avatar_url}
        alt=""
      />

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-2xl text-[#E7EDF4]">
            {data.user.name}
          </h1>

          <a
            className="transition-all flex items-center h-5 leading-5 border-b border-transparent uppercase text-[#3294F8] text-xs font-bold hover:border-[#3294F8]"
            href={`https://github.com/${data.user.login}`}
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
            {data.user.login}
          </li>
          <li className="flex gap-2 items-center">
            <Buildings className="text-lg text-[#3A536B]" />
            {data.user.company ?? 'Freelancer'}
          </li>
          <li className="flex gap-2 items-center">
            <Users className="text-lg text-[#3A536B]" />
            {data.user.followers ?? 0}{' '}
            {data.user.followers > 1 ? 'Seguidores' : 'Seguidor'}
          </li>
        </ul>
      </div>
    </section>
  )
}
