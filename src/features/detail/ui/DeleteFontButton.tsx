import { Button } from '@/components'

import { useFontDeletion } from '../hook/useFontDeletion'

/**
 * 폰트 삭제하기 버튼 컴포넌트
 *
 * - 클릭 시, 폰트 삭제
 */

export const DeleteFontButton = () => {
  const { handleDeleteFont } = useFontDeletion()

  return (
    <Button size="lg" onClick={handleDeleteFont} className="bg-warn text-white hover:bg-red-500">
      삭제하기
    </Button>
  )
}
