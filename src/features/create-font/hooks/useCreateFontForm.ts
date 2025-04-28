import { toast } from 'react-toastify'

import { useCreateFont } from '../api/createFont.mutation'
import type { CreateForm } from '../type/createFont.type'

export const useCreateFontForm = () => {
  const { mutate: createFont } = useCreateFont()

  const handleSubmitForm = (formData: CreateForm) => {
    const sendForm = new FormData()
    sendForm.append(
      'fontCreateDTO',
      JSON.stringify({
        name: formData.name,
        example: formData.example,
      }),
    )
    sendForm.append('file', formData.file)

    createFont(sendForm, {
      onSuccess: () => toast.success('폰트 제작 요청이 되었습니다.'),
      onError: () => toast.error('폰트 제작 요청에 실패하였습니다.'),
    })
  }

  return { handleSubmitForm }
}
