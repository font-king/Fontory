import { useSearchParams } from 'react-router-dom'

import { EXPLORE_FILTER_OPTIONS, type ExploreFilterKey } from '../config/filterOptions.constant'

export const useFilterQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterFromQuery = searchParams.get('filter') as ExploreFilterKey | null

  const selectedKey: ExploreFilterKey =
    filterFromQuery && EXPLORE_FILTER_OPTIONS.some((filter) => filter.key === filterFromQuery)
      ? filterFromQuery
      : 'createdAt'

  const setFilter = (key: ExploreFilterKey) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('filter', key)
    setSearchParams(newParams, { replace: true })
  }

  return { selectedKey, setFilter }
}
