import {
  ArrowSquareOut,
  CalendarCheck,
  CaretLeft,
  ChatCircleText,
  GithubLogo
} from 'phosphor-react'

// type PostHeaderProps = {}

export function PostHeader() {
  return (
    <section className="flex gap-8 w-full py-8 px-10 rounded-2xl bg-[#0B1B2B] shadow-lg">
      <div className="flex-1 flex flex-col gap-4">
        <header className="flex justify-between items-center mb-2">
          <a
            className="transition-all flex items-center h-5 leading-5 border-b border-transparent uppercase text-[#3294F8] text-xs font-bold hover:border-[#3294F8]"
            href="/"
          >
            <CaretLeft className="w-4 h-4 mr-2 " />
            <span>Voltar</span>
          </a>

          <a
            className="transition-all flex items-center h-5 leading-5 border-b border-transparent uppercase text-[#3294F8] text-xs font-bold hover:border-[#3294F8]"
            href="https://github.com/lucianotavernard"
            target="_blank"
            rel="noreferrer"
          >
            <span>Ver no GitHub</span>
            <ArrowSquareOut className="w-4 h-4 ml-2 " />
          </a>
        </header>

        <h1 className="font-bold text-2xl text-[#E7EDF4]">
          JavaScript data types and data structures
        </h1>

        <ul className="flex flex-wrap gap-6 items-center mt-auto">
          <li className="flex gap-2 items-center">
            <GithubLogo className="text-lg text-[#3A536B]" />
            lucianotavernard
          </li>
          <li className="flex gap-2 items-center">
            <CalendarCheck className="text-lg text-[#3A536B]" />
            Há 5 dias
          </li>
          <li className="flex gap-2 items-center">
            <ChatCircleText className="text-lg text-[#3A536B]" />
            Comments
          </li>
        </ul>
      </div>
    </section>
  )
}
