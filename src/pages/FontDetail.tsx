import { SectionLayout } from '@/components/SectionLayout'
import { useFontDetail } from '@/features/detail/hook/useFontDetail'
import { useFontOwnership } from '@/features/detail/model/fontOwnership.store'
import { FontDetailContent } from '@/features/detail/ui/FontDetailContent'
import { FontDetailFooter } from '@/features/detail/ui/FontDetailFooter'
import { FontDetailHeader } from '@/features/detail/ui/FontDetailHeader'
import { RecommendFontList } from '@/features/detail/ui/RecommendFontList'

export const FontDetail = () => {
  const isMyFont = useFontOwnership()

  const { font } = useFontDetail()

  if (!font) throw new Error('해당 폰트가 존재하지 않습니다.')

  return (
    <SectionLayout>
      <FontDetailHeader />
      <FontDetailContent />

      <div className="mt-12">{true ? <FontDetailFooter /> : <RecommendFontList />}</div>
    </SectionLayout>
  )
}
