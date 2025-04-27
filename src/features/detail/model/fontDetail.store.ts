import { create } from 'zustand'

import type { FontDetailResponse, RecommendListResponse } from '@/types/font'

type FontDetailType = FontDetailResponse & { recommendList?: RecommendListResponse }

type FontDetailState = {
  font: FontDetailType | null
  actions: {
    setFont: (font: FontDetailType) => void
    reset: () => void
  }
}

export const useFontDetailStore = create<FontDetailState>((set) => ({
  font: null,
  actions: {
    setFont: (font) => set({ font }),
    reset: () => set({ font: null }),
  },
}))

export const useFontDetails = () => useFontDetailStore((state) => state.font)
export const useFontDetailActions = () => useFontDetailStore((state) => state.actions)
