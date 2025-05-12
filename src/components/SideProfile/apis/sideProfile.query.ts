import { useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { FontProgress } from '@/features/my-font/type/myFont.type'

export const sideProfileKeys = {
  all: [...MAIN_QUERY_KEY, 'side-profile'] as const,
  progress: () => [...sideProfileKeys.all, 'progress'] as const,
}

export const endpoints = {
  progress: () => '/fonts/progress',
}

export const useFontProgress = () =>
  useSuspenseQuery<FontProgress, AxiosError>({
    queryKey: sideProfileKeys.progress(),
    queryFn: () => apiClient.get(endpoints.progress()),
    staleTime: 60000,
    gcTime: 60000 * 5,
  })
