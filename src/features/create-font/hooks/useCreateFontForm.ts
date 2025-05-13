import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCreateFont } from '../api/createFont.mutation'
import type { CreateForm } from '../type/createFont.type'

/**
 * 폰트 제작 요청을 처리하는 훅
 *
 * - 폼 데이터를 FormData로 가공하고 요청 후 성공/실패 처리
 */

export const useCreateFontForm = () => {
  const navigate = useNavigate()
  const { mutate: createFont } = useCreateFont()

  // FormData 구성 함수
  const prepareFormData = (formData: CreateForm) => {
    const sendForm = new FormData()
    sendForm.append(
      'fontCreateDTO',
      JSON.stringify({
        name: formData.name,
        example: formData.example,
        phone: formData.phone || '',
      }),
    )
    sendForm.append('file', formData.file)
    return sendForm
  }

  const handleSuccess = () => {
    toast.success('폰트 제작 요청이 되었습니다.')
    navigate('/progress')
  }

  const handleError = () => {
    toast.error('폰트 제작 요청에 실패하였습니다.')
  }

  const handleSubmitForm = (formData: CreateForm) => {
    const sendForm = prepareFormData(formData)

    createFont(sendForm, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleSubmitForm }
}
