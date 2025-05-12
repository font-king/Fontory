import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { FontListResponse } from '@/types'

export const exploreKeys = {
  all: [...MAIN_QUERY_KEY, 'explore'] as const,
  list: (sortBy: string, keyword: string) => [...exploreKeys.all, 'list', sortBy, keyword] as const,
}

const endpoints = {
  exploreList: (params: { page: number; keyword: string; sortBy: string }) =>
    `/fonts?page=${params.page}&size=20&keyword=${params.keyword}&sortBy=${params.sortBy}`,
} as const

export const useExploreList = (keyword: string, sortBy: string) =>
  useSuspenseInfiniteQuery<FontListResponse, AxiosError>({
    queryKey: exploreKeys.list(keyword, sortBy),
    queryFn: ({ pageParam = 0 }) =>
      apiClient.get(endpoints.exploreList({ page: pageParam as number, keyword, sortBy })),
    getNextPageParam: (lastPage, allPages) => (lastPage.last ? undefined : allPages.length),
    initialPageParam: 0,
  })
