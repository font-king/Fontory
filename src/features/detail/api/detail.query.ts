import { useSuspenseQueries } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'

import type { DetailResponse, RecommendListResponse } from '../type/detail.type'

export const detailKeys = {
  all: [...MAIN_QUERY_KEY, 'font-detail'] as const,
  detail: (fontId: number) => [...detailKeys.all, fontId],
  recommend: (fontId: number) => [...detailKeys.all, 'recommend', fontId],
}

const endpoints = {
  getDetail: (fontId: number) => `/fonts/${fontId}`,
  recommend: (fontId: number) => `/fonts/${fontId}/others`,
} as const

export const useFontDetail = (fontId: number) =>
  useSuspenseQueries({
    queries: [
      {
        queryKey: detailKeys.detail(fontId),
        queryFn: () => apiClient.get<DetailResponse>(endpoints.getDetail(fontId)),
      },
      {
        queryKey: detailKeys.recommend(fontId),
        queryFn: () => apiClient.get<RecommendListResponse>(endpoints.recommend(fontId)),
      },
    ],
  })
