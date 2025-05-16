import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { publicApiClient } from '@/app/api'

export const endpoints = {
  signup: '/register',
} as const

export const useSignup = () => {
  return useMutation<unknown, AxiosError, FormData>({
    mutationFn: (formData) =>
      publicApiClient.post(endpoints.signup, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
  })
}
