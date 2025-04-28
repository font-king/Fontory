import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api/globalQueryKey'

/**
 * @todo 폰트 중복검사 api 주소 변경 필요
 */

export const endpoints = {
  create: '/fonts',
  validateName: '/validate-fontname',
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

export const useValidateFontName = () =>
  useMutation<boolean, AxiosError, string>({
    mutationFn: (name) => apiClient.post(endpoints.validateName, { name }),
  })
