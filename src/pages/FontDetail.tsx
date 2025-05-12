import { SectionLayout } from '@/components'
import { useFontDetailEffect } from '@/features/detail/hook/useFontDetailEffect'
import { DetailContent, DetailHeader, FontDetailFooter, RecommendList } from '@/features/detail/ui'

const FontDetail = () => {
  // const isMyFont = useFontOwnership()

  const { font } = useFontDetailEffect()

  if (!font) throw new Error('해당 폰트가 존재하지 않습니다.')

  return (
    <SectionLayout>
      <DetailHeader />
      <DetailContent />

      <div className="mt-12">{true ? <FontDetailFooter /> : <RecommendList />}</div>
    </SectionLayout>
  )
}

export default FontDetail
