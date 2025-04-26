import { useSearchParams } from 'react-router-dom'

export const FILTER_OPTIONS = [
  { label: '전체', key: 'createdAt' },
  { label: '조회순', key: 'downloadCount' },
  { label: '북마크순', key: 'bookmarkCount' },
] as const

type FilterKey = (typeof FILTER_OPTIONS)[number]['key']

export const useFilterQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filterFromQuery = searchParams.get('filter') as FilterKey | null
  const selectedKey: FilterKey =
    filterFromQuery && FILTER_OPTIONS.some((filter) => filter.key === filterFromQuery)
      ? filterFromQuery
      : 'createdAt'

  const setFilter = (key: FilterKey) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('filter', key)
    setSearchParams(newParams, { replace: true })
  }

  return { selectedKey, setFilter }
}
