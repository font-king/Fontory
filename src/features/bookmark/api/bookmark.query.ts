import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { FontListResponse } from '@/shared/types/font'

export const bookmarkKeys = {
  all: [...MAIN_QUERY_KEY, 'bookmark'] as const,
  list: (keyword: string) => [...bookmarkKeys.all, 'list', keyword] as const,
}

export const endpoints = {
  bookmarkList: (params: { page: number; keyword: string }) =>
    `/bookmarks?page=${params.page}&size=20&keyword=${params.keyword}`,
}

export const useBookmarkList = (keyword: string) =>
  useSuspenseInfiniteQuery<FontListResponse, AxiosError>({
    queryKey: bookmarkKeys.list(keyword),
    queryFn: ({ pageParam = 0 }) =>
      apiClient.get(endpoints.bookmarkList({ page: pageParam as number, keyword })),
    getNextPageParam: (lastPage, allPages) => (lastPage.last ? undefined : allPages.length),
    initialPageParam: 0,
  })
