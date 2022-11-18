type PostProps = {
  post: {
    title: string
    body: string
    date: string
  }
}

export function Post({ post }: PostProps) {
  return (
    <a
      className="transition-all p-8 border rounded-xl border-[#112131] bg-[#112131] hover:border-[#3a536b]"
      href="#"
    >
      <hgroup className="flex gap-4 mb-5">
        <strong className="flex-1 text-xl text-[#E7EDF4] line-clamp-2">
          {post.title}
        </strong>
        <time className="w-max text-xs text-[#7B96B2]">{post.date}</time>
      </hgroup>

      <p className="line-clamp-4">{post.body}</p>
    </a>
  )
}
