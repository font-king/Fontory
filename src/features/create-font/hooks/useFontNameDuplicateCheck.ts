import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useValidateFontName } from '../api/createFont.mutation'
import { useVerificationActions } from '../stores/verification.store'

export const useFontNameDuplicateCheck = (section: string) => {
  const { setError, getValues } = useFormContext()
  const { mutate } = useValidateFontName()

  const { updateVerificationStatus, setVerificationMessage, startChecking, completeChecking } =
    useVerificationActions()

  const checkDuplicate = useCallback(() => {
    startChecking()

    mutate(getValues(section), {
      onSuccess: () => {
        updateVerificationStatus({ isDirty: false, isVerified: true })
        setVerificationMessage('사용 가능한 이름입니다.')
      },
      onError: (error) => {
        updateVerificationStatus({ isDirty: false, isVerified: false })

        if (error.status === 409) {
          setError(section, { type: 'manual', message: '이미 사용 중인 이름입니다.' })
        } else {
          setError(section, {
            type: 'manual',
            message: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          })
        }
      },
      onSettled: () => completeChecking(),
    })
  }, [
    completeChecking,
    getValues,
    mutate,
    section,
    setError,
    setVerificationMessage,
    startChecking,
    updateVerificationStatus,
  ])

  return { checkDuplicate }
}
