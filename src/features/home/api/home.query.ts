import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient, publicApiClient } from '@/app/api'
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
  })

export const useFontProgress = () =>
  useSuspenseQuery<FontProgress, AxiosError>({
    queryKey: homeKeys.progress(),
    queryFn: () => apiClient.get(endpoints.progress()),
  })

export const useFontDownload = (fontId: number) =>
  useQuery<Blob, AxiosError>({
    queryKey: homeKeys.downloadFont(fontId),
    queryFn: () =>
      publicApiClient.get(endpoints.downloadFont(fontId), {
        responseType: 'blob',
      }),
    enabled: false,
  })
