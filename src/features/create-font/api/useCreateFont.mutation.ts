import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { instance } from '@/app/api'
import { fontQueryKeys } from '@/queries/useFont.queries'

import type { CreateFontRequest } from '../model/createFont.type'

export const useCreateFontMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError<unknown>, CreateFontRequest>({
    mutationFn: ({ body }) => instance.post(`/fonts`, body),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: fontQueryKeys.all }),
  })
}
