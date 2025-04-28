import InfiniteScroll from 'react-infinite-scroller'

import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'
import { FontCardWithProfile } from '@/shared/ui/FontCardWithProfile'

import { useExploreList } from '../api/explore.query'

export const ExploreFontList = () => {
  const { sortBy, keyword } = useQueryParams({ sortBy: 'createdAt', keyword: '' })

  const { data, hasNextPage, fetchNextPage } = useExploreList(sortBy, keyword)

  const fontList = data.pages.flatMap((page) => page.content)

  if (!fontList || !fontList.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <InfiniteScroll hasMore={hasNextPage} threshold={250} loadMore={() => fetchNextPage()}>
      <section className="grid grid-cols-2 gap-7">
        {fontList.map((font) => (
          <FontCardWithProfile key={font.id} font={font} />
        ))}
      </section>
    </InfiniteScroll>
  )
}
