import { useLocation } from 'react-router-dom'

export const useSearchKeyword = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  return params.get('keyword') ?? ''
}
