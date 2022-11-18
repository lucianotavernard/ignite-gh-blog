import { useParams } from 'react-router-dom'

import { usePost } from '@/services/hooks/usePost'

import { Header } from '@/components/Header'

import { PostHeader } from './components/PostHeader'
import { PostContent } from './components/PostContent'

export function Post() {
  const { postId } = useParams()

  const { data, isLoading } = usePost({ id: Number(postId) })

  return (
    <main className="min-h-screen bg-[#071422] text-[#afc2d4]">
      <Header />

      {!isLoading && (
        <section className="relative z-10 flex flex-col items-center w-full max-w-4xl -mt-20 mx-auto px-6">
          <PostHeader />

          {data && <PostContent text={data.post.body} />}
        </section>
      )}
    </main>
  )
}
