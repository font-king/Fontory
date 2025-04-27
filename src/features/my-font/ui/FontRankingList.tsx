import { EmptyMessage } from '@/components/EmptyMessage'
import { FontCardWithoutProfile } from '@/components/FontCardWithoutProfile'
import type { FontRankingResponse } from '@/types/font'

type Props = {
  fonts: FontRankingResponse
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
