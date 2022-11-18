import { useEffect, useState } from 'react'
import { getPosts, Posts } from '@/services/hooks/getPosts'

import { Header } from '@/components/Header'

import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

export function Home() {
  const [posts, setPosts] = useState<Posts>([])
  const [total, setTotal] = useState<number>(0)

  async function handleSubmit(query: string) {
    const { posts, totalCount } = await getPosts({ query })

    setPosts(posts)
    setTotal(totalCount)
  }

  useEffect(() => {
    handleSubmit('')
  }, [])

  return (
    <main className="min-h-screen bg-[#071422] text-[#afc2d4]">
      <Header />

      <section className="relative z-10 flex flex-col items-center w-full max-w-4xl -mt-20 mx-auto px-6">
        <Profile />

        <SearchInput onSubmit={handleSubmit} totalCount={total} />

        {posts.length > 0 ? (
          <section className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-12">
            {posts.map((post) => (
              <Post key={post.number} post={post} />
            ))}
          </section>
        ) : (
          <section className="flex w-full">
            <p className="transition-all flex-1 p-8 border rounded-xl border-[#112131] bg-[#112131]">
              Posts not found. ;(
            </p>
          </section>
        )}
      </section>
    </main>
  )
}
