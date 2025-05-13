import { SectionLayout } from '@/components'
import { useInitFontDetail } from '@/features/detail/hook/useInitFontDetail'

import { DeleteFontButton } from '../ui/DeleteFontButton'
import { DetailContent } from '../ui/DetailContent'
import { DetailHeader } from '../ui/DetailHeader'
import { EditFontButton } from '../ui/EditFontButton'
import { EditFontModal } from '../ui/EditFontModal'
import { RecommendList } from '../ui/RecommendList'

const FontDetail = () => {
  const isMyFont = true
  const { font } = useInitFontDetail()

  if (!font) throw new Error('해당 폰트가 존재하지 않습니다.')

  return (
    <SectionLayout>
      <DetailHeader />
      <DetailContent />

      <div className="mt-12">
        {isMyFont ? (
          <div className="flex items-center justify-end gap-5">
            <EditFontButton />
            <DeleteFontButton />
            <EditFontModal />
          </div>
        ) : (
          <RecommendList />
        )}
      </div>
    </SectionLayout>
  )
}

export default FontDetail
