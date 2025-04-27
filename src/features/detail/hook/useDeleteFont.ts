import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useParamFontId } from '@/hooks/useParamFontId'

import { useDeleteFontMutation } from '../api/useDeleteFont.mutation'

export const useDeleteFont = () => {
  const navigate = useNavigate()
  const fontId = useParamFontId()

  const { mutate: deleteFont } = useDeleteFontMutation()

  const handleDeleteFont = () => {
    deleteFont(
      { url: { fontId } },
      {
        onSuccess: () => {
          toast.success('폰트가 삭제되었습니다.')
          navigate('/my-font', { replace: true })
        },
        onError: () => toast.error('폰트 삭제에 실패하였습니다.'),
      },
    )
  }

  return { handleDeleteFont }
}
