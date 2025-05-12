import { useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { FontProgress } from '@/features/my-font/type/myFont.type'
import type { FontDetail } from '@/shared/types/font'

export const homeKeys = {
  all: [...MAIN_QUERY_KEY, 'home'] as const,
  popularList: () => [...homeKeys.all, 'popular'] as const,
  progress: () => [...homeKeys.all, 'progress'] as const,
  downloadFont: (fontId: number) => [...homeKeys.all, 'download', fontId] as const,
}

export const endpoints = {
  popularList: () => '/fonts/popular',
  progress: () => '/fonts/progress',
  downloadFont: (fontId: number) => `/fonts/${fontId}/download`,
}

export const usePopularList = () =>
  useSuspenseQuery<FontDetail[], AxiosError>({
    queryKey: homeKeys.popularList(),
    queryFn: () => apiClient.get(endpoints.popularList()),
    staleTime: 60000,
    gcTime: 60000 * 5,
  })

export const useFontProgress = () =>
  useSuspenseQuery<FontProgress, AxiosError>({
    queryKey: homeKeys.progress(),
    queryFn: () => apiClient.get(endpoints.progress()),
    staleTime: 60000,
    gcTime: 60000 * 5,
  })
