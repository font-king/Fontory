import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'
import type { DownloadType } from '@/features/home/type/home.type'

const downloadKeys = {
  all: [...MAIN_QUERY_KEY, 'download'] as const,
  downloadFont: (fontId: number) => [...downloadKeys.all, fontId] as const,
}

const endpoints = {
  downloadFont: (fontId: number) => `/fonts/${fontId}/download`,
}

export const useFontDownload = (fontId: number) =>
  useQuery<DownloadType, AxiosError>({
    queryKey: downloadKeys.downloadFont(fontId),
    queryFn: () => apiClient.get(endpoints.downloadFont(fontId)),
    enabled: false,
  })
