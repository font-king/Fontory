import { create } from 'zustand'

/**
 * 검증 상태 타입
 * - isVerified: 유효성 검사 성공 여부
 * - isDirty: 폼의 변경 여부 (검사 후 값이 바뀌었는지 여부)
 */

type VerificationState = {
  isVerified: boolean
  isDirty: boolean
}

type Actions = {
  startChecking: () => void
  completeChecking: () => void
  setVerificationMessage: (message: string | null) => void
  updateVerificationStatus: (update: Partial<VerificationState>) => void
  resetVerification: () => void
}

type NicknameVerificationStore = {
  isChecking: boolean
  verificationMessage: string | null
  verificationStatus: VerificationState
  actions: Actions
}

const initialValue = {
  isChecking: false,
  verificationMessage: null,
  verificationStatus: {
    isVerified: false,
    isDirty: false,
  },
}

/**
 * - isChecking: 중복 검사 중 여부
 * - verificationMessage: UI에 표시할 메시지
 * - verificationStatus: 검증 상태
 */

export const useNicknameVerificationStore = create<NicknameVerificationStore>((set) => ({
  ...initialValue,
  actions: {
    /** 중복 검사 시작 */
    startChecking: () => set({ isChecking: true }),

    /** 중복 검사 완료 */
    completeChecking: () => set({ isChecking: false }),

    /** 메시지 설정 */
    setVerificationMessage: (message) => set({ verificationMessage: message }),

    /** 검증 상태 업데이트 */
    updateVerificationStatus: (update) =>
      set((state) => ({ verificationStatus: { ...state.verificationStatus, ...update } })),

    /** 전체 상태 초기화 */
    resetVerification: () => set(initialValue),
  },
}))

export const useVerificationCheckingState = () =>
  useNicknameVerificationStore((state) => state.isChecking)

export const useVerificationMessage = () =>
  useNicknameVerificationStore((state) => state.verificationMessage)

export const useVerificationStatus = () =>
  useNicknameVerificationStore((state) => state.verificationStatus)

export const useVerificationActions = () => useNicknameVerificationStore((state) => state.actions)
