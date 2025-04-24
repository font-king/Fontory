import { instance } from '@/app/api'
import { PopularFontListResponse } from '@/types/font'
import { useSuspenseQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const fontQueryKeys = {
  all: ['fonts'],
  popularFontList: () => [...fontQueryKeys.all, 'popular'],
}

export const useFetchPopularFontList = () =>
  useSuspenseQuery<PopularFontListResponse, AxiosError>({
    queryKey: fontQueryKeys.popularFontList(),
    queryFn: () => instance.get('/fonts/popular'),
  })
