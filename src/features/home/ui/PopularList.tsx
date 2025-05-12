import { EmptyMessage, FontCardWithProfile } from '@/components'
import { ERROR_MESSAGE_LIST } from '@/config'

import { usePopularList } from '../apis/home.query'

export const PopularList = () => {
  const { data: fontList } = usePopularList()

  if (!fontList || !fontList.length) {
    return <EmptyMessage message={ERROR_MESSAGE_LIST.emptyFontList} />
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {fontList.slice(0, 3).map((font) => (
        <FontCardWithProfile key={font.id} font={font} />
      ))}
    </div>
  )
}
