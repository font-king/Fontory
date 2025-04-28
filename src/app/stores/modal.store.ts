import { create } from 'zustand'

type ModalState = {
  modals: Record<string, { isOpen: boolean }>
}

type ModalActions = {
  openModal: (id: string) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState & { actions: ModalActions }>((set) => ({
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
