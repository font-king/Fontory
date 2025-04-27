import {
  useQuery,
  useSuspenseInfiniteQuery,
  useSuspenseQueries,
  useSuspenseQuery,
} from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { instance } from '@/app/api'
import { instanceWithoutAuth } from '@/app/api/instanceWithoutAuth'
import type {
  DownloadFontRequest,
  ExploreFontListRequest,
  ExploreFontListResponse,
  FontDetailRequest,
  FontDetailResponse,
  PopularFontListResponse,
  RecommendListResponse,
} from '@/types/font'

export const fontQueryKeys = {
  all: ['fonts'],
  detail: (fontId: number) => [...fontQueryKeys.all, 'detail', fontId],
  downloadFont: (fontId: number) => [...fontQueryKeys.all, 'download', fontId],

  popularFontList: () => [...fontQueryKeys.all, 'popular'],
  recommendList: (fontId: number) => [...fontQueryKeys.all, 'recommend', fontId],

  exploreList: (sortBy: string, keyword: string) => [
    ...fontQueryKeys.all,
    'explore',
    sortBy,
    keyword,
  ],
} as const

const ENDPOINTS = {
  exploreList: ({ page, sortBy, keyword }: ExploreFontListRequest['url']) => {
    const baseUrl = `/fonts?page=${page}&size=20`
    const params = new URLSearchParams()

    if (sortBy) params.set('sortBy', sortBy)
    if (keyword) params.set('keyword', keyword)

    const queryString = params.toString()
    return queryString ? `${baseUrl}&${queryString}` : baseUrl
  },
}

export const useFetchPopularFontList = () =>
  useSuspenseQuery<PopularFontListResponse, AxiosError>({
    queryKey: fontQueryKeys.popularFontList(),
    queryFn: () => instance.get('/fonts/popular'),
  })

export const useFetchExploreFontList = ({ url }: ExploreFontListRequest) =>
  useSuspenseInfiniteQuery<ExploreFontListResponse, AxiosError>({
    queryKey: fontQueryKeys.exploreList(url.sortBy, url.keyword),
    queryFn: ({ pageParam = 0 }) =>
      instance.get(
        ENDPOINTS.exploreList({ page: pageParam, sortBy: url.sortBy, keyword: url.keyword }),
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.last ? undefined : allPages.length),
    gcTime: 0,
    staleTime: 0,
  })

export const useFetchFontDownload = ({ url }: DownloadFontRequest) =>
  useQuery<Blob, AxiosError>({
    queryKey: fontQueryKeys.downloadFont(url.fontId),
    queryFn: () =>
      instanceWithoutAuth.get(`/fonts/${url.fontId}/download`, {
        responseType: 'blob',
      }),
    enabled: false,
  })

export const useFetchFontDetail = ({ url }: FontDetailRequest) =>
  useSuspenseQueries({
    queries: [
      {
        queryKey: fontQueryKeys.detail(url.fontId),
        queryFn: () => instance.get<FontDetailResponse>(`/fonts/${url.fontId}`),
      },
      {
        queryKey: fontQueryKeys.recommendList(url.fontId),
        queryFn: () => instance.get<RecommendListResponse>(`/fonts/${url.fontId}/others`),
      },
    ],
  })
