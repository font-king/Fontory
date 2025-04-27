import { EmptyMessage } from '@/components/EmptyMessage'
import type { FontRankingResponse } from '@/types/font'

import { BarChart } from './BarChart'
import { ChartLegend } from './ChartLegend'

type Props = {
  fonts: FontRankingResponse
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
