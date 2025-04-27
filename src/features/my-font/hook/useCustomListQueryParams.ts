import { useLocation } from 'react-router-dom'

export const useCustomListQueryParams = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const keyword = params.get('keyword') || ''

  return { keyword }
}
