import { create } from 'zustand'

import type { FontDetail } from '@/types'

type FontDetailState = {
  font: FontDetail | null
  recommendList: FontDetail[]
}

type FontDetailActions = {
  setFont: (data: FontDetail) => void
  setRecommend: (list: FontDetail[]) => void
  reset: () => void
}

export const useFontDetailStore = create<FontDetailState & { actions: FontDetailActions }>(
  (set) => ({
    font: null,
    recommendList: [],
    actions: {
      setFont: (font) => set({ font }),
      setRecommend: (recommendList) => set({ recommendList }),
      reset: () => set({ font: null, recommendList: [] }),
    },
  }),
)

export const useFontDetails = () => useFontDetailStore((state) => state.font)
export const useRecommendList = () => useFontDetailStore((state) => state.recommendList)
export const useFontDetailActions = () => useFontDetailStore((state) => state.actions)
