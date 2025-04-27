import { create } from 'zustand'

type ModalStore = {
  modals: Record<string, { isOpen: boolean }>
  actions: {
    openModal: (id: string) => void
    closeModal: () => void
  }
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: {},
  actions: {
    openModal: (id) =>
      set((state) => ({
        modals: { ...state.modals, [id]: { isOpen: true } },
      })),
    closeModal: () => set({ modals: {} }),
  },
}))

export const useModalState = () => useModalStore((state) => state.modals)
export const useModalActions = () => useModalStore((state) => state.actions)
