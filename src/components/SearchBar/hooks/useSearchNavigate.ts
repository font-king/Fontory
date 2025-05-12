import { useLocation, useNavigate } from 'react-router-dom'

export const useSearchNavigate = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const goSearch = (keyword: string) => {
    const params = new URLSearchParams(location.search)

    if (keyword) {
      params.set('keyword', keyword)
    } else {
      params.delete('keyword')
    }

    navigate({
      pathname: location.pathname,
      search: params.toString(),
    })
  }

  return { goSearch }
}
