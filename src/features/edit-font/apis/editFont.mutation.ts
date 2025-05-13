import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { detailKeys } from '@/features/detail/api/detail.query'

import type { EditRequest } from '../types/editFont.type'

const endpoints = {
  edit: (fontId: number) => `/fonts/${fontId}`,
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
