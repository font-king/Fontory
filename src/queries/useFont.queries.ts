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
  CustomFontListRequest,
  CustomFontListResponse,
  DownloadFontRequest,
  ExploreFontListRequest,
  ExploreFontListResponse,
  FontDetailRequest,
  FontDetailResponse,
  FontProgressResponse,
  FontRankingResponse,
  PopularFontListResponse,
  RecommendListResponse,
} from '@/types/font'

export const fontQueryKeys = {
  all: ['fonts'],
  detail: (fontId: number) => [...fontQueryKeys.all, 'detail', fontId] as const,
  downloadFont: (fontId: number) => [...fontQueryKeys.all, 'download', fontId] as const,
  progress: () => [...fontQueryKeys.all, 'progress'] as const,
  fontRanking: () => [...fontQueryKeys.all, 'ranking'] as const,

  popularFontList: () => [...fontQueryKeys.all, 'popular'] as const,
  recommendList: (fontId: number) => [...fontQueryKeys.all, 'recommend', fontId] as const,

  exploreList: (sortBy: string, keyword: string) =>
    [...fontQueryKeys.all, 'explore', sortBy, keyword] as const,
  customList: (keyword: string) => [...fontQueryKeys.all, 'custom', keyword] as const,
}

const ENDPOINTS = {
  exploreList: ({ page, sortBy, keyword }: ExploreFontListRequest['url']) => {
    const baseUrl = `/fonts?page=${page}&size=20`
    const params = new URLSearchParams()

    if (sortBy) params.set('sortBy', sortBy)
    if (keyword) params.set('keyword', keyword)

    const queryString = params.toString()
    return queryString ? `${baseUrl}&${queryString}` : baseUrl
  },

  myCustomFontList: ({ page, keyword }: CustomFontListRequest['url']) => {
    const baseUrl = `/fonts/members?page=${page}&size=20`
    const searchParams = new URLSearchParams()

    if (keyword) searchParams.append('keyword', keyword)

    const queryString = searchParams.toString()
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

export const useFetchCustomFontList = ({ url }: CustomFontListRequest) =>
  useSuspenseInfiniteQuery<CustomFontListResponse, AxiosError>({
    queryKey: fontQueryKeys.customList(url.keyword),
    queryFn: ({ pageParam = 0 }) =>
      instance.get(ENDPOINTS.myCustomFontList({ page: pageParam, keyword: url.keyword })),
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

export const useFetchFontProgress = () =>
  useSuspenseQuery<FontProgressResponse, AxiosError>({
    queryKey: fontQueryKeys.progress(),
    queryFn: () => instance.get(`/fonts/progress`),
  })

export const useFetchMyFontRanking = () =>
  useSuspenseQuery<FontRankingResponse, AxiosError>({
    queryKey: fontQueryKeys.fontRanking(),
    queryFn: () => instance.get('/fonts/members/popular'),
  })
