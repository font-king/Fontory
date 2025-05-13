import { useModalActions } from '@/app/stores'
import { Button } from '@/components'
import { MODAL_KEYS } from '@/config'

/**
 * 폰트 수정하기 버튼 컴포넌트
 *
 * - 클릭 시, 수정 모달 열림
 */

export const EditFontButton = () => {
  const { openModal } = useModalActions()

  const handleOpenEditModal = () => openModal(MODAL_KEYS.editFont)

  return (
    <Button size="lg" onClick={handleOpenEditModal}>
      수정하기
    </Button>
  )
}
