import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient, publicApiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { User } from '@/app/stores'
import type { FontProgress } from '@/features/my-font/type/myFont.type'

export const sideProfileKeys = {
  all: [...MAIN_QUERY_KEY, 'side-profile'] as const,
  user: () => [...sideProfileKeys.all, 'user'] as const,
  progress: () => [...sideProfileKeys.all, 'progress'] as const,
}

export const endpoints = {
  user: () => '/member/me',
  progress: () => '/fonts/progress',
}

export const useAuthInfo = () =>
  useQuery<User, AxiosError>({
    queryKey: sideProfileKeys.user(),
    queryFn: () => publicApiClient.get(endpoints.user()),
    retry: false,
  })

export const useFontProgress = () =>
  useSuspenseQuery<FontProgress, AxiosError>({
    queryKey: sideProfileKeys.progress(),
    queryFn: () => apiClient.get(endpoints.progress()),
    staleTime: 60000,
    gcTime: 60000 * 5,
  })
