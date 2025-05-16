import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'

import { useSignup } from '../api/signup.mutation'
import type { SignupFormType } from '../config/signup.schema'

export const useSignupForm = () => {
  const navigate = useNavigate()
  const { mutate: signup } = useSignup()

  const prepareFormData = (formData: SignupFormType) => {
    const sendForm = new FormData()
    sendForm.append(
      'req',
      JSON.stringify({
        nickname: formData.nickname,
        gender: 'MALE',
        birth: '2025-05-16',
        terms: formData.terms,
      }),
    )
    sendForm.append('file', formData.file as File)
    return sendForm
  }

  const handleSuccess = () => {
    toast.success('회원가입에 성공했습니다.')
    navigate(ROUTES.HOME)
  }

  const handleError = () => {
    toast.error('회원가입에 실패하였습니다.')
  }

  const handleSubmitForm = (formData: SignupFormType) => {
    const sendForm = prepareFormData(formData)

    signup(sendForm, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleSubmitForm }
}
