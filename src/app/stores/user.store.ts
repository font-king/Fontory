import { create } from 'zustand'

/**
 * @todo 로직에 맞게 유저 수정해야함
 */

type UserState = {
  user: null | { id: string; name: string }
}

type UserActions = {
  login: (userData: { id: string; name: string }) => void
  logout: () => void
}

export const useUserStore = create<UserState & { actions: UserActions }>((set) => ({
  user: null,
  actions: {
    login: (userData) => set({ user: userData }),
    logout: () => set({ user: null }),
  },
}))

export const useUserState = () => useUserStore((state) => state.user)
export const useUserActions = () => useUserStore((state) => state.actions)
