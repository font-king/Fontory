import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient, publicApiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { FontListResponse } from '@/types'

import type { FontRanking } from '../type/myFont.type'

export const myFontKeys = {
  all: [...MAIN_QUERY_KEY, 'my-font'] as const,
  customList: (keyword: string) => [...myFontKeys.all, 'custom-list', keyword] as const,
  fontRanking: () => [...myFontKeys.all, 'ranking'] as const,
}

const endpoints = {
  customList: (params: { page: number; keyword: string }) =>
    `/fonts/members?page=${params.page}&size=20&keyword=${params.keyword}`,
  fontRanking: () => '/fonts/members/popular',
} as const

export const useCustomList = (keyword: string) =>
  useSuspenseInfiniteQuery<FontListResponse, AxiosError>({
    queryKey: myFontKeys.customList(keyword),
    queryFn: ({ pageParam = 0 }) =>
      publicApiClient.get(endpoints.customList({ page: pageParam as number, keyword })),
    getNextPageParam: (lastPage, allPages) => (lastPage.last ? undefined : allPages.length),
    initialPageParam: 0,
  })

export const useFontRanking = () =>
  useSuspenseQuery<FontRanking, AxiosError>({
    queryKey: myFontKeys.fontRanking(),
    queryFn: () => apiClient.get(endpoints.fontRanking()),
  })
