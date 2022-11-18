import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

export type User = {
  bio: string
  name: string
  login: string
  company?: string
  html_url: string
  followers: number
  avatar_url: string
}

type GetUserResponse = {
  user: User
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export async function getUser(): Promise<GetUserResponse> {
  const response = await api.get<User>(`users/${username}`)

  return {
    user: response.data
  }
}

export function useUser() {
  return useQuery(['user'], () => getUser())
}
