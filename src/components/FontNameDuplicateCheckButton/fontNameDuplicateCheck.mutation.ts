import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient } from '@/app/api'

export const endpoints = {
  validateName: '/fonts/verify-name',
} as const

export const useValidateFontName = () =>
  useMutation<unknown, AxiosError, string>({
    mutationFn: (name) => apiClient.post(endpoints.validateName, { name }),
  })
