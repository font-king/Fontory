import { useLocation } from 'react-router-dom'

export const useExploreListQueryParams = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const sortBy = params.get('filter') || 'createdAt'
  const keyword = params.get('keyword') || ''

  return { sortBy, keyword }
}
