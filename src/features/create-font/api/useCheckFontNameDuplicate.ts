import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { instance } from '@/app/api'

import type {
  CheckFontNameDuplicateRequest,
  CheckFontNameDuplicateResponse,
} from '../model/createFont.type'

/**
 * @todo api 주소 변경 필요
 */

export const useCheckFontNameDuplicate = () =>
  useMutation<CheckFontNameDuplicateResponse, AxiosError<string>, CheckFontNameDuplicateRequest>({
    mutationFn: ({ body }) => instance.post(`/validate-fontname`, body),
  })
