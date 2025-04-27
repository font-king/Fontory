import { useLocation } from 'react-router-dom'

export const useBookmarkListQueryParams = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const keyword = params.get('keyword') || ''

  return { keyword }
}
