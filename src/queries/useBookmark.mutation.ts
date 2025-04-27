import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { instance } from '@/app/api'
import type { BookmarkRequest } from '@/types/font'

import { fontQueryKeys } from './useFont.queries'

export const useAddBookmarkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, BookmarkRequest>({
    mutationFn: ({ url }) => instance.post(`/bookmarks/${url.fontId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}

export const useRemoveBookmarkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, BookmarkRequest>({
    mutationFn: ({ url }) => instance.delete(`/bookmarks/${url.fontId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}
