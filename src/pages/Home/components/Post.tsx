import { Link } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type PostProps = {
  post: {
    body: string
    title: string
    number: number
    created_at: string
  }
}

export function Post({ post }: PostProps) {
  const createdAt = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <Link
      className="transition-all p-8 border rounded-xl border-[#112131] bg-[#112131] hover:border-[#3a536b]"
      to={`/posts/${post.number}`}
    >
      <hgroup className="flex gap-4 mb-5">
        <strong className="flex-1 text-xl text-[#E7EDF4] line-clamp-2">
          {post.title}
        </strong>

        <time className="w-max text-sm text-[#7B96B2]">{createdAt}</time>
      </hgroup>

      <p className="text-base line-clamp-4">{post.body}</p>
    </Link>
  )
}
