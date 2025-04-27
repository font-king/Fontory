import { toast } from 'react-toastify'

import { useParamFontId } from '@/hooks/useParamFontId'
import { useModalActions } from '@/stores/modal.store'
import type { EditFontForm } from '@/types/font'

import { useEditFontMutation } from '../api/useEditFont.mutation'

export const useEditFont = () => {
  const fontId = useParamFontId()

  const { closeModal } = useModalActions()
  const { mutate: editFont } = useEditFontMutation()

  const handleEditFont = (formData: EditFontForm) => {
    editFont(
      { url: { fontId }, body: formData },
      {
        onSuccess: () => {
          toast.success('폰트 정보가 수정되었습니다.')
          closeModal()
        },
        onError: () => toast.error('폰트 수정에 실패했습니다.'),
      },
    )
  }

  return { handleEditFont }
}
