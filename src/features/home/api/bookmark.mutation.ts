import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'

export const endpoints = {
  addBookmark: (fontId: number) => `/bookmarks/${fontId}`,
  removeBookmark: (fontId: number) => `/bookmarks/${fontId}`,
} as const

export const useAddBookmark = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, number>({
    mutationFn: (fontId) => apiClient.post(endpoints.addBookmark(fontId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY })
    },
  })
}

export const useRemoveBookmark = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, number>({
    mutationFn: (fontId) => apiClient.delete(endpoints.removeBookmark(fontId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY })
    },
  })
}
