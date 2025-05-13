import { useEffect } from 'react'

import { useFontDetail } from '@/features/detail/api/detail.query'
import { useFontDetailActions } from '@/features/detail/stores/fontDetail.store'
import { useParamFontId } from '@/hooks'

/**
 * 폰트 상세 페이지 진입 시 폰트 정보 및 추천 폰트 리스트를 가져오고,
 * store에 저장하는 커스텀 훅
 */

export const useInitFontDetail = () => {
  const fontId = useParamFontId()
  const { detail, recommend } = useFontDetail(fontId)

  const { setFont, setRecommend } = useFontDetailActions()

  useEffect(() => {
    setFont(detail)
    setRecommend(recommend)
  }, [detail, recommend, setFont, setRecommend])

  return { font: detail, recommendList: recommend }
}
