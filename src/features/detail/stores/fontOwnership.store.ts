import { create } from 'zustand'

type FontOwnershipState = {
  isMyFont: boolean
  actions: {
    setOwnership: (isMine: boolean) => void
  }
}

export const useFontOwnershipStore = create<FontOwnershipState>((set) => ({
  isMyFont: false,
  actions: {
    setOwnership: (isMine) => set({ isMyFont: isMine }),
  },
}))

export const useFontOwnership = () => useFontOwnershipStore((state) => state.isMyFont)
export const useFontOwnershipActions = () => useFontOwnershipStore((state) => state.actions)
