import { create } from 'zustand'

import type { FontDetail } from '@/types'

type Actions = {
  setFont: (data: FontDetail) => void
  setRecommend: (list: FontDetail[]) => void
  reset: () => void
}

type FontDetailStore = {
  font: FontDetail | null
  recommendList: FontDetail[]
  actions: Actions
}

/**
 * font: 현재 보고 있는 폰트
 * recommendList: 추천 폰트 리스트
 */

export const useFontDetailStore = create<FontDetailStore>((set) => ({
  font: null,
  recommendList: [],
  actions: {
    setFont: (font) => set({ font }),
    setRecommend: (recommendList) => set({ recommendList }),
    reset: () => set({ font: null, recommendList: [] }),
  },
}))

/** 폰트 상세 정보 가져오기 */
export const useFontDetails = () => useFontDetailStore((state) => state.font)
/** 추천 리스트 가져오기 */
export const useRecommendList = () => useFontDetailStore((state) => state.recommendList)
/** 액션 */
export const useFontDetailActions = () => useFontDetailStore((state) => state.actions)
