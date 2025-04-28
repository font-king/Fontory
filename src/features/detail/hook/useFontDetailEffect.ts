import { useEffect } from 'react'

import { useFontDetail } from '@/features/detail/api/detail.query'
import { useFontDetailActions } from '@/features/detail/stores/fontDetail.store'
import { useParamFontId } from '@/shared/hooks/useParamFontId'

export const useFontDetailEffect = () => {
  const fontId = useParamFontId()
  const [detailQuery, recommendQuery] = useFontDetail(fontId)

  const { setFont, setRecommend } = useFontDetailActions()
  // const { setOwnership } = useFontOwnershipActions()

  useEffect(() => {
    if (detailQuery.data) {
      setFont(detailQuery.data)
      // setOwnership(font.writerName === user?.name)
    }
    if (recommendQuery.data) {
      setRecommend(recommendQuery.data)
    }
  }, [detailQuery.data, recommendQuery.data, setFont, setRecommend])

  return {
    font: detailQuery.data,
    recommendList: recommendQuery.data,
  }
}
