import { EmptyMessage } from '@/shared/ui/EmptyMessage'
import { FontCardWithoutProfile } from '@/shared/ui/FontCardWithoutProfile'

import type { FontRanking } from '../type/myFont.type'

type Props = {
  fonts: FontRanking
}

export const FontRankingList = ({ fonts }: Props) => {
  if (!fonts || !fonts.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <div className="grid grid-cols-2 gap-6">
      {fonts.map((font) => (
        <FontCardWithoutProfile key={font.id} font={font} />
      ))}
    </div>
  )
}
