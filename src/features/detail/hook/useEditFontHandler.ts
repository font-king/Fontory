import { toast } from 'react-toastify'

import { useModalActions } from '@/app/stores'
import { useEditFont } from '@/features/detail/api/detail.mutation'
import type { EditForm } from '@/features/detail/type/detail.type'
import { useParamFontId } from '@/hooks'

export const useEditFontHandler = () => {
  const fontId = useParamFontId()

  const { closeModal } = useModalActions()
  const { mutate: editFont } = useEditFont()

  const handleEditFont = (formData: EditForm) => {
    editFont(
      { fontId, body: formData },
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
