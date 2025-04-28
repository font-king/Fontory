let accessToken: string | null = import.meta.env.VITE_PUBLIC_ETC

export const getAccessToken = () => {
  return accessToken
}

export const refreshAccessToken = async () => {
  // const { accessToken: newToken } = await refresh()
  // accessToken = newToken

  // 임시로 환경변수로 대체
  accessToken = import.meta.env.VITE_PUBLIC_PROVIDE
  return accessToken
}

export const clearAccessToken = () => {
  accessToken = null
}
