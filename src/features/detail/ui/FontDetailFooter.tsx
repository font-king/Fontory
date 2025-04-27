import { Button } from '@/components/Button'
import { MODAL_KEYS } from '@/constants/modalKeys'
import { useModalActions } from '@/stores/modal.store'

import { useDeleteFont } from '../hook/useDeleteFont'

import { EditFontModal } from './EditFontModal'

export const FontDetailFooter = () => {
  const { openModal } = useModalActions()
  const { handleDeleteFont } = useDeleteFont()

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
