import { EmptyMessage, FontCardWithoutProfile } from '@/components'
import { ERROR_MESSAGE_LIST } from '@/config'
import { useRecommendList } from '@/features/detail/stores/fontDetail.store'

const ListContent = () => {
  const recommendList = useRecommendList()

  if (!recommendList || !recommendList.length) {
    return <EmptyMessage message={ERROR_MESSAGE_LIST.emptyFontList} />
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {recommendList.slice(0, 3).map((font) => (
        <FontCardWithoutProfile key={font.id} font={font} />
      ))}
    </div>
  )
}

export const RecommendList = () => {
  return (
    <div>
      <p className="h4 text-primary mb-5">제작자의 다른 폰트</p>
      <ListContent />
    </div>
  )
}
