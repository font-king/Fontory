import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'

import { useModalActions } from '@/app/stores'
import { useEditFont } from '@/features/detail/api/detail.mutation'
import type { EditForm } from '@/features/detail/type/detail.type'
import { useParamFontId } from '@/hooks'

/**
 * 폰트 수정 요청 및 모달 제어를 담당하는 커스텀 훅
 */

export const useFontUpdate = () => {
  const fontId = useParamFontId()

  const { closeModal } = useModalActions()
  const { mutate: editFont } = useEditFont()

  const handleSuccess = () => {
    toast.success('폰트 정보가 수정되었습니다.')
    closeModal()
  }

  const handleError = (error: AxiosError) => {
    toast.error('폰트 수정에 실패했습니다.', error.response)
  }

  const handleEditFont = (formData: EditForm) => {
    editFont({ fontId, body: formData }, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleEditFont }
}
