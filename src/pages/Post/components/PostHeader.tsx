import { Link, useParams } from 'react-router-dom'

import {
  ArrowSquareOut,
  CalendarCheck,
  CaretLeft,
  ChatCircleText,
  GithubLogo
} from 'phosphor-react'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { usePost } from '@/services/hooks/usePost'

export function PostHeader() {
  const { postId } = useParams()

  const { data, isLoading } = usePost({ id: Number(postId) })

  if (isLoading) {
    return (
      <section className="flex gap-8 w-full py-8 px-10 rounded-2xl bg-[#0B1B2B] shadow-lg">
        <h1>Carregando..</h1>
      </section>
    )
  }

  return (
    <section className="flex gap-8 w-full py-8 px-10 rounded-2xl bg-[#0B1B2B] shadow-lg">
      {data && (
        <div className="flex-1 flex flex-col gap-4">
          <header className="flex justify-between items-center mb-2">
            <Link
              className="transition-all flex items-center h-5 leading-5 border-b border-transparent uppercase text-[#3294F8] text-xs font-bold hover:border-[#3294F8]"
              to="/"
            >
              <CaretLeft className="w-4 h-4 mr-2 " />
              <span>Voltar</span>
            </Link>

            <a
              className="transition-all flex items-center h-5 leading-5 border-b border-transparent uppercase text-[#3294F8] text-xs font-bold hover:border-[#3294F8]"
              href={`https://github.com/${data.post.user.login}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>Ver no GitHub</span>
              <ArrowSquareOut className="w-4 h-4 ml-2 " />
            </a>
          </header>

          <h1 className="font-bold text-2xl text-[#E7EDF4]">
            {data.post.title}
          </h1>

          <ul className="flex flex-wrap gap-6 items-center mt-auto">
            <li className="flex gap-2 items-center">
              <GithubLogo className="text-lg text-[#3A536B]" />
              {data.post.user.login}
            </li>
            <li className="flex gap-2 items-center">
              <CalendarCheck className="text-lg text-[#3A536B]" />
              {formatDistanceToNow(new Date(data.post.created_at), {
                locale: ptBR,
                addSuffix: true
              })}
            </li>
            <li className="flex gap-2 items-center">
              <ChatCircleText className="text-lg text-[#3A536B]" />
              {data.post.comments} Comments
            </li>
          </ul>
        </div>
      )}
    </section>
  )
}
