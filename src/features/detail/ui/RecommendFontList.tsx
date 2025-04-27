import { EmptyMessage } from '@/components/EmptyMessage'
import { FontCardWithoutProfile } from '@/components/FontCardWithoutProfile'

import { useFontDetails } from '../model/fontDetail.store'

const ListContent = () => {
  const font = useFontDetails()

  if (!font || !font.recommendList || !font.recommendList.length) {
    return <EmptyMessage message="등록된 다른 폰트가 없습니다." />
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {font.recommendList.slice(0, 3).map((font) => (
        <FontCardWithoutProfile key={font.id} font={font} />
      ))}
    </div>
  )
}

export const RecommendFontList = () => {
  return (
    <div>
      <p className="h4 text-primary mb-5">제작자의 다른 폰트</p>
      <ListContent />
    </div>
  )
}
