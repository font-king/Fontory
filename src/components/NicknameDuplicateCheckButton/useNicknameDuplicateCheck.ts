import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import type { AxiosError } from 'axios'

import { useValidateNickname } from './nicknameDuplicateCheck.mutation'
import { useVerificationActions } from './nicknameVerification.store'

/**
 * 닉네임 중복 검사를 수행하는 커스텀 훅
 * 입력된 닉네임이 서버에서 유효한지 확인하고, 결과에 따라 상태(store)와 에러 메시지를 설정
 *
 * @param section - React Hook Form에서 사용하는 필드 이름
 * @returns checkNicknameDuplicate 함수 (중복 검사 실행 함수)
 */

export const useNicknameDuplicateCheck = (section: string) => {
  const { setError, getValues } = useFormContext()
  const { mutate } = useValidateNickname()

  const { updateVerificationStatus, setVerificationMessage, startChecking, completeChecking } =
    useVerificationActions()

  const handleSuccess = useCallback(() => {
    updateVerificationStatus({ isDirty: false, isVerified: true })
    setVerificationMessage('사용 가능한 닉네임입니다.')
  }, [setVerificationMessage, updateVerificationStatus])

  const handleError = useCallback(
    (error: AxiosError, section: string) => {
      updateVerificationStatus({ isDirty: false, isVerified: false })

      const message =
        error?.response?.status === 409
          ? '이미 사용 중인 닉네임입니다.'
          : '오류가 발생했습니다. 잠시 후 다시 시도해주세요.'

      setError(section, { type: 'manual', message })
    },
    [setError, updateVerificationStatus],
  )

  /** 중복 검사 실행 함수 */
  const checkNicknameDuplicate = useCallback(() => {
    startChecking()
    mutate(getValues(section), {
      onSuccess: handleSuccess,
      onError: (error) => handleError(error, section),
      onSettled: () => completeChecking(),
    })
  }, [completeChecking, getValues, handleError, handleSuccess, mutate, section, startChecking])

  return { checkNicknameDuplicate }
}
