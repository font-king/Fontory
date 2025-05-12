import { EmptyMessage } from '@/components'

import type { FontRanking } from '../type/myFont.type'

import { BarChart } from './BarChart'
import { ChartLegend } from './ChartLegend'

type Props = {
  fonts: FontRanking
}

export const FontRankingChart = ({ fonts }: Props) => {
  if (!fonts || !fonts.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <div className="flex items-center gap-12">
      <BarChart fonts={fonts} />
      <ChartLegend />
    </div>
  )
}
