import { useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { instance } from '@/app/api'
import type { PopularFontListResponse } from '@/types/font'

export const fontQueryKeys = {
  all: ['fonts'],
  popularFontList: () => [...fontQueryKeys.all, 'popular'],
}

export const useFetchPopularFontList = () =>
  useSuspenseQuery<PopularFontListResponse, AxiosError>({
    queryKey: fontQueryKeys.popularFontList(),
    queryFn: () => instance.get('/fonts/popular'),
  })
