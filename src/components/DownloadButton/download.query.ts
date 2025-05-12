import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'

import type { DownloadResponse } from './download.type'

const downloadKeys = {
  downloadFont: (fontId: number) => [MAIN_QUERY_KEY, 'download', fontId] as const,
}

const endpoints = {
  downloadFont: (fontId: number) => `/fonts/${fontId}/download`,
}

export const useFontDownload = (fontId: number) =>
  useQuery<DownloadResponse, AxiosError>({
    queryKey: downloadKeys.downloadFont(fontId),
    queryFn: () => apiClient.get(endpoints.downloadFont(fontId)),
    enabled: false,
  })
