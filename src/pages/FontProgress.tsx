import { FontProgressTable } from '@/features/progress/ui/FontProgressTable'
import { SectionLayout } from '@/shared/ui/SectionLayout'

const FontProgress = () => {
  return (
    <SectionLayout title="폰트 제작 현황">
      <FontProgressTable />
    </SectionLayout>
  )
}

export default FontProgress
