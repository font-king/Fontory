import { EXPLORE_FILTER_OPTIONS } from '../config/filterOptions.constant'
import { useFilterQuery } from '../hook/useFilterQuery'

export const ExploreFilterList = () => {
  const { selectedKey, setFilter } = useFilterQuery()

  return (
    <nav aria-label="정렬 필터">
      <ul className="flex gap-7">
        {EXPLORE_FILTER_OPTIONS.map((filter) => {
          const isActive = filter.key === selectedKey
          const textStyle = isActive ? 'h4 text-primary' : 'p2 text-grey'

          return (
            <li key={filter.key}>
              <button
                type="button"
                className={`cursor-pointer ${textStyle}`}
                aria-pressed={isActive}
                onClick={() => setFilter(filter.key)}
              >
                {filter.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
