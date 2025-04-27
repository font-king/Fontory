import InfiniteScroll from 'react-infinite-scroller'

import { EmptyMessage } from '@/components/EmptyMessage'
import { FontCardWithProfile } from '@/components/FontCardWithProfile'
import { useFetchBookmarkFontList } from '@/queries/useFont.queries'

import { useBookmarkListQueryParams } from './useBookmarkListQueryParams'

export const BookmarkFontList = () => {
  const { keyword } = useBookmarkListQueryParams()

  const { data, hasNextPage, fetchNextPage } = useFetchBookmarkFontList({ url: { keyword } })

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
