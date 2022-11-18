import { api } from '@/services/api'

type Post = {
  created_at: string
  comments: number
  number: number
  title: string
  body: string
  user: {
    login: string
  }
}

export type Posts = Array<Post>

type GetPostRequest = {
  query: string
}

type GetPostResponse = {
  posts: Posts
  totalCount: number
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export async function getPosts({
  query
}: GetPostRequest): Promise<GetPostResponse> {
  const response = await api.get(
    `search/issues?q=${query}%20repo:${username}/${repoName}`
  )

  return {
    posts: response.data.items,
    totalCount: response.data.items.length
  }
}
