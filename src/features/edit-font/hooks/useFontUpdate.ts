import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'

import { ROUTES } from '@/app/router'
import { useParamFontId } from '@/hooks'

import { useEditFont } from '../apis/editFont.mutation'
import type { EditForm } from '../types/editFont.type'

/**
 * 폰트 수정 요청을 담당하는 커스텀 훅
 */

export const useFontUpdate = () => {
  const navigate = useNavigate()
  const fontId = useParamFontId()

  const { mutate: editFont } = useEditFont()

  const handleSuccess = () => {
    toast.success('폰트 정보가 수정되었습니다.')
    navigate(ROUTES.DETAIL(fontId), { replace: true })
  }

  const handleError = (error: AxiosError) => {
    toast.error('폰트 수정에 실패했습니다.')
    console.error(error.response)
  }

  const handleEditFont = (formData: EditForm) => {
    editFont({ fontId, body: formData }, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleEditFont }
}
