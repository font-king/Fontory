import { FILTER_OPTIONS, useFilterQuery } from '../hook/useFilterQuery'

export const FilterList = () => {
  const { selectedKey, setFilter } = useFilterQuery()

  return (
    <nav aria-label="정렬 필터">
      <ul className="flex gap-7">
        {FILTER_OPTIONS.map((filter) => {
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
