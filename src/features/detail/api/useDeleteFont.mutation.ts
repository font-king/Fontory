import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { instance } from '@/app/api'
import { fontQueryKeys } from '@/queries/useFont.queries'
import type { DeleteFontRequest } from '@/types/font'

export const useDeleteFontMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, DeleteFontRequest>({
    mutationFn: ({ url }) => instance.delete(`/fonts/members/${url.fontId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}
