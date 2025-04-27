import InfiniteScroll from 'react-infinite-scroller'

import { EmptyMessage } from '@/components/EmptyMessage'
import { FontCardWithoutProfile } from '@/components/FontCardWithoutProfile'
import { useFetchCustomFontList } from '@/queries/useFont.queries'

import { useCustomListQueryParams } from '../hook/useCustomListQueryParams'

export const CustomFontList = () => {
  const { keyword } = useCustomListQueryParams()
  const { data, hasNextPage, fetchNextPage } = useFetchCustomFontList({ url: { keyword } })

  const fontList = data.pages.flatMap((page) => page.content)

  if (!fontList || !fontList.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <InfiniteScroll hasMore={hasNextPage} threshold={250} loadMore={() => fetchNextPage()}>
      <div className="grid grid-cols-2 gap-6">
        {fontList.map((font) => (
          <FontCardWithoutProfile key={font.id} font={font} />
        ))}
      </div>
    </InfiniteScroll>
  )
}
