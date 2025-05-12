import { EmptyMessage, FontCardWithProfile } from '@/components'

import { usePopularList } from '../api/home.query'

export const PopularList = () => {
  const { data: fontList } = usePopularList()

  if (!fontList || !fontList.length) {
    return <EmptyMessage message="아직 등록된 폰트가 없습니다." />
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {fontList.slice(0, 3).map((font) => (
        <FontCardWithProfile key={font.id} font={font} />
      ))}
    </div>
  )
}
