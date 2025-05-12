import { SectionLayout } from '@/components'
import { FontProgressTable } from '@/features/progress/ui/FontProgressTable'

const FontProgress = () => {
  return (
    <SectionLayout title="폰트 제작 현황">
      <FontProgressTable />
    </SectionLayout>
  )
}

export default FontProgress
