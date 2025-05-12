import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useDeleteFont } from '@/features/detail/api/detail.mutation'
import { useParamFontId } from '@/hooks'

export const useDeleteFontHandler = () => {
  const fontId = useParamFontId()
  const navigate = useNavigate()

  const { mutate: deleteFont } = useDeleteFont()

  const handleDeleteFont = () => {
    deleteFont(fontId, {
      onSuccess: () => {
        toast.success('폰트가 삭제되었습니다.')
        navigate('/my-font', { replace: true })
      },
      onError: () => toast.error('폰트 삭제에 실패하였습니다.'),
    })
  }

  return { handleDeleteFont }
}
