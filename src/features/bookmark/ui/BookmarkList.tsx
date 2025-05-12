import InfiniteScroll from 'react-infinite-scroller'

import { EmptyMessage, FontCardWithProfile } from '@/components'
import { useQueryParams } from '@/hooks'

import { useBookmarkList } from '../api/bookmark.query'

export const BookmarkList = () => {
  const { keyword } = useQueryParams({ keyword: '' })

  const { data, hasNextPage, fetchNextPage } = useBookmarkList(keyword)

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
