import { useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { FontDetail } from '@/shared/types/font'

export const homeKeys = {
  all: [MAIN_QUERY_KEY, 'home'] as const,
  popularList: () => [...homeKeys.all, 'popular'] as const,
}

export const endpoints = {
  popularList: () => '/fonts/popular',
}

export const usePopularList = () =>
  useSuspenseQuery<FontDetail[], AxiosError>({
    queryKey: homeKeys.popularList(),
    queryFn: () => apiClient.get(endpoints.popularList()),
    staleTime: 60000,
    gcTime: 60000 * 5,
  })
