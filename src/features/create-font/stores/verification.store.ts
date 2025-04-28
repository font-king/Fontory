import { create } from 'zustand'

type VerificationState = {
  isVerified: boolean
  isDirty: boolean
}

type FontNameVerificationStore = {
  isChecking: boolean
  verificationMessage: string | null
  verificationStatus: VerificationState
  actions: {
    startChecking: () => void
    completeChecking: () => void
    setVerificationMessage: (message: string | null) => void
    updateVerificationStatus: (update: Partial<VerificationState>) => void
    resetVerification: () => void
  }
}

const initialValue = {
  isChecking: false,
  verificationMessage: null,
  verificationStatus: {
    isVerified: false,
    isDirty: false,
  },
}

export const useFontNameVerificationStore = create<FontNameVerificationStore>((set) => ({
  ...initialValue,
  actions: {
    startChecking: () => set({ isChecking: true }),
    completeChecking: () => set({ isChecking: false }),
    setVerificationMessage: (message) => set({ verificationMessage: message }),
    updateVerificationStatus: (update) =>
      set((state) => ({
        verificationStatus: { ...state.verificationStatus, ...update },
      })),
    resetVerification: () => set(initialValue),
  },
}))

export const useVerificationCheckingState = () =>
  useFontNameVerificationStore((state) => state.isChecking)

export const useVerificationMessage = () =>
  useFontNameVerificationStore((state) => state.verificationMessage)

export const useVerificationStatus = () =>
  useFontNameVerificationStore((state) => state.verificationStatus)

export const useVerificationActions = () => useFontNameVerificationStore((state) => state.actions)
