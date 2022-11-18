import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

export type Post = {
  created_at: string
  comments: number
  number: number
  title: string
  body: string
  user: {
    login: string
  }
}

type GetPostRequest = {
  id: number
}

type GetPostResponse = {
  post: Post
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export async function getPost(
  getPostRequest: GetPostRequest
): Promise<GetPostResponse> {
  const { id } = getPostRequest

  const response = await api.get<Post>(
    `repos/${username}/${repoName}/issues/${id}`
  )

  return {
    post: response.data
  }
}

export function usePost({ id }: GetPostRequest) {
  return useQuery(['post', id], () => getPost({ id }))
}
