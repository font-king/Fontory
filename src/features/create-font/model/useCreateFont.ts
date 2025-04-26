import { toast } from 'react-toastify'

import { useCreateFontMutation } from '../api/useCreateFont.mutation'

import type { CreateFontFormType } from './createFont.type'

export const useCreateFont = () => {
  const { mutate: createFont } = useCreateFontMutation()

  const handleCreateFont = (formData: CreateFontFormType) => {
    const sendingForm = {
      fontCreateDTO: {
        name: formData.name,
        example: formData.example,
      },
      file: new Array(formData.file),
    }

    createFont(
      { body: sendingForm },
      {
        onSuccess: () => toast.success('폰트 제작 요청이 되었습니다.'),
        onError: () => toast.error('폰트 제작 요청에 실패하였습니다.'),
      },
    )
  }

  return { handleCreateFont }
}
