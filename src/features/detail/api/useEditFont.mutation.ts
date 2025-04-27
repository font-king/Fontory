import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { instance } from '@/app/api'
import { fontQueryKeys } from '@/queries/useFont.queries'
import type { EditFontRequest } from '@/types/font'

export const useEditFontMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, AxiosError, EditFontRequest>({
    mutationFn: ({ url, body }) => instance.put(`/fonts/${url.fontId}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
    },
  })
}
