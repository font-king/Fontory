import { useModalActions } from '@/app/stores'
import { Button } from '@/components'
import { MODAL_KEYS } from '@/config'
import { useDeleteFontHandler } from '@/features/detail/hook/useDeleteFontHandler'

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
