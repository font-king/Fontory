import { useEffect, useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { useVerificationActions } from './nicknameVerification.store'

/**
 * 닉네임 중복 검증 이후 사용자가 값을 변경했는지를 감지하는 커스텀 훅
 *
 * - 값이 변경되면 검증 상태를 무효화(isVerified: false)
 * - 중복 검사가 완료된 닉네임 값을 기억해두고, 이후 입력된 닉네임과 비교하여 변경 여부를 판단
 *
 * @param fieldName - react-hook-form에 등록된 닉네임 필드 이름
 * @returns
 * - `nickname`: 현재 form 상의 닉네임 값
 * - `markAsVerified`: 중복 검사 통과 후 호출하여 현재 닉네임을 기준값으로 저장
 */

export const useNicknameVerificationWatcher = (fieldName: string) => {
  const { control, getValues } = useFormContext()
  const nickname = useWatch({ control, name: fieldName })
  const verifiedNicknameRef = useRef<string | null>(null)
  const { updateVerificationStatus } = useVerificationActions()

  const markAsVerified = () => {
    const current = getValues(fieldName)
    verifiedNicknameRef.current = current
  }

  const hasChangedAfterVerification =
    verifiedNicknameRef.current !== null && verifiedNicknameRef.current !== nickname

  useEffect(() => {
    if (hasChangedAfterVerification) {
      updateVerificationStatus({ isDirty: true, isVerified: false })
    }
  }, [hasChangedAfterVerification, updateVerificationStatus])

  return { nickname, markAsVerified }
}
