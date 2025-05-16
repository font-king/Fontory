import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { publicApiClient } from '@/app/api'

export const endpoints = {
  validateName: (nickname: string) => `/register/check-duplicate?nickname=${nickname}`,
} as const

export const useValidateNickname = () =>
  useMutation<boolean, AxiosError, string>({
    mutationFn: (nickname) => publicApiClient.get(endpoints.validateName(nickname)),
  })
