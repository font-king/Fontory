import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'

import { useDeleteFont } from '@/features/detail/api/detail.mutation'
import { useParamFontId } from '@/hooks'

export const useFontDeletion = () => {
  const fontId = useParamFontId()
  const navigate = useNavigate()

  const { mutate: deleteFont } = useDeleteFont()

  const handleSuccess = () => {
    toast.success('폰트가 삭제되었습니다.')
    navigate('/my-font', { replace: true })
  }

  const handleError = (error: AxiosError) => {
    toast.error('폰트 삭제에 실패하였습니다.', error.response)
  }

  const handleDeleteFont = () => {
    deleteFont(fontId, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleDeleteFont }
}
