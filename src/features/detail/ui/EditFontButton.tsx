import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { Button } from '@/components'
import { useParamFontId } from '@/hooks'

/**
 * 폰트 수정하기 버튼 컴포넌트
 *
 * - 클릭 시, 수정 페이지로 이동
 */

export const EditFontButton = () => {
  const navigate = useNavigate()
  const fontId = useParamFontId()

  const handleGoEditPage = () => {
    navigate(ROUTES.EDIT_FONT(fontId))
  }

  return (
    <Button size="lg" onClick={handleGoEditPage}>
      수정하기
    </Button>
  )
}
