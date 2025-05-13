import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'

export const endpoints = {
  create: '/fonts',
} as const

export const useCreateFont = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, FormData>({
    mutationFn: (formData) =>
      apiClient.post(endpoints.create, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY }),
  })
}
