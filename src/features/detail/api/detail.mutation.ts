import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'

import type { EditRequest } from '../type/detail.type'

import { detailKeys } from './detail.query'

const endpoints = {
  edit: (fontId: number) => `/fonts/${fontId}`,
  delete: (fontId: number) => `/fonts/members/${fontId}`,
  recommend: (fontId: number) => `/fonts/${fontId}/others`,
} as const

export const useEditFont = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, EditRequest>({
    mutationFn: ({ fontId, body }) => apiClient.put(endpoints.edit(fontId), body),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: detailKeys.detail(variables.fontId),
      })
    },
  })
}

export const useDeleteFont = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, number>({
    mutationFn: (fontId) => apiClient.delete(endpoints.delete(fontId)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: detailKeys.all,
      })
    },
  })
}
