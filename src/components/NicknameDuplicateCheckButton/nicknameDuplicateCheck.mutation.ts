import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { publicApiClient } from '@/app/api'

export const endpoints = {
  validateName: '/register/check-duplicate',
} as const

export const useValidateNickname = () =>
  useMutation<boolean, AxiosError, string>({
    mutationFn: (nickname) => publicApiClient.post(endpoints.validateName, { nickname }),
  })
