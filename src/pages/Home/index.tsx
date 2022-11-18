import { Header } from '@/components/Header'
import { Post } from './components/Post'

import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

export function Home() {
  return (
    <main className="min-h-screen bg-[#071422] text-[#afc2d4]">
      <Header />

      <section className="relative z-10 flex flex-col items-center w-full max-w-4xl -mt-20 mx-auto px-6">
        <Profile />

        <SearchInput />

        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-12">
          <Post
            post={{
              title: 'Quisquam expedita animi delectus asperiores dolorem',
              body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam expedita animi delectus asperiores dolorem, unde, aliquid sint quasi sit repellendus perspiciatis molestiae vel beatae. Iure rem vitae velit repudiandae eaque.',
              date: 'Há 10 horas'
            }}
          />

          <Post
            post={{
              title:
                'Vitae ratione quod earum cupiditate illo necessitatibus suscipit dolore quae',
              body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ratione quod earum cupiditate illo necessitatibus suscipit dolore quae, officia adipisci sit eveniet vero iste ab numquam culpa, distinctio accusantium cumque.',
              date: 'Há 3 dias'
            }}
          />

          <Post
            post={{
              title: 'Dolores repellendus quod reiciendis sequi maiores',
              body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus quod reiciendis sequi maiores doloribus architecto quos ea sed enim? Culpa architecto non consequuntur expedita libero voluptas maiores placeat ipsa.',
              date: 'Há 4 dias'
            }}
          />

          <Post
            post={{
              title: 'Similique nemo distinctio autem numquam',
              body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo distinctio autem numquam, fugit corrupti amet minus veritatis doloribus necessitatibus illum perspiciatis soluta vitae. Rerum nostrum aspernatur optio magni. Enim?',
              date: 'Há 5 dias'
            }}
          />
        </section>
      </section>
    </main>
  )
}
