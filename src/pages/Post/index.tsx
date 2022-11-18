// import { Container } from './styles';

import { Header } from '@/components/Header'

import { PostHeader } from './components/PostHeader'
import { PostContent } from './components/PostContent'

// type PostProps = {}

export function Post() {
  return (
    <main className="min-h-screen bg-[#071422] text-[#afc2d4]">
      <Header />

      <section className="relative z-10 flex flex-col items-center w-full max-w-4xl -mt-20 mx-auto px-6">
        <PostHeader />

        <PostContent text="Lorem" />
      </section>
    </main>
  )
}
