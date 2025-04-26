import InfiniteScroll from 'react-infinite-scroller'

import { EmptyMessage } from '@/components/EmptyMessage'
import { FontCardWithProfile } from '@/components/FontCardWithProfile'
import { useFetchExploreFontList } from '@/queries/useFont.queries'

import { useExploreListQueryParams } from '../hook/useExploreListQueryParams'

export const ExploreFontList = () => {
  const { sortBy, keyword } = useExploreListQueryParams()

  const { data, hasNextPage, fetchNextPage } = useFetchExploreFontList({ url: { sortBy, keyword } })

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
