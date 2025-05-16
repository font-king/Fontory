import { create } from 'zustand'

export type User = {
  memberId: 0
  nickname: string
  gender: string
  birth: string
  terms: boolean
  profileImageUrl: string
}

/**
 * @todo 로직에 맞게 유저 수정해야함
 */

type Actions = {
  login: (user: User) => void
  logout: () => void
}

type UserState = {
  user: User | null
  actions: Actions
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  actions: {
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
  },
}))

export const useUserState = () => useUserStore((state) => state.user)
export const useUserActions = () => useUserStore((state) => state.actions)
