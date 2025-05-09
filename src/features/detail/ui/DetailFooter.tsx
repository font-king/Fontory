import { useModalActions } from '@/app/stores'
import { useDeleteFontHandler } from '@/features/detail/hook/useDeleteFontHandler'
import { MODAL_KEYS } from '@/shared/config/modalKeys'
import { Button } from '@/shared/ui/Button'

import { EditFontModal } from './EditFontModal'

export const FontDetailFooter = () => {
  const { openModal } = useModalActions()
  const { handleDeleteFont } = useDeleteFontHandler()

  const handleOpenEditModal = () => openModal(MODAL_KEYS.editFont)

  return (
    <div className="flex items-center justify-end gap-5">
      <Button size="lg" onClick={handleOpenEditModal}>
        수정하기
      </Button>

      <Button size="lg" onClick={handleDeleteFont} className="bg-warn text-white hover:bg-red-500">
        삭제하기
      </Button>

      <EditFontModal />
    </div>
  )
}
