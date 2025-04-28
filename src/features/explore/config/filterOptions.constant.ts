export const EXPLORE_FILTER_OPTIONS = [
  { label: '전체', key: 'createdAt' },
  { label: '조회순', key: 'downloadCount' },
  { label: '북마크순', key: 'bookmarkCount' },
] as const

export type ExploreFilterKey = (typeof EXPLORE_FILTER_OPTIONS)[number]['key']
