import { SectionLayout } from '@/components/SectionLayout'
import { FontProgressTable } from '@/features/progress/ui/FontProgressTable'

export const FontProgress = () => {
  return (
    <SectionLayout title="폰트 제작 현황">
      <FontProgressTable />
    </SectionLayout>
  )
}
