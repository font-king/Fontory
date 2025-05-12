import InfiniteScroll from 'react-infinite-scroller'

import { EmptyMessage, FontCardWithProfile } from '@/components'
import { ERROR_MESSAGE_LIST } from '@/config'
import { useQueryParams } from '@/hooks'

import { useExploreList } from '../api/explore.query'

export const ExploreFontList = () => {
  const { sortBy, keyword } = useQueryParams({ sortBy: 'createdAt', keyword: '' })

  const { data, hasNextPage, fetchNextPage } = useExploreList(keyword, sortBy)

  const fontList = data.pages.flatMap((page) => page.content)

  if (!fontList || !fontList.length)
    return <EmptyMessage message={ERROR_MESSAGE_LIST.emptyFontList} />

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
