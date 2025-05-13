import { useFormContext } from 'react-hook-form'

import { useVerificationStatus } from '@/components/FontNameDuplicateCheckButton/fontNameVerification.store'

import { fontAttribute } from '../config/schema'

/**
 * 현재 폼 상태로 "제작하기" 버튼이 활성화될 수 있는지 여부를 계산
 *
 * - 조건: 파일 존재 + form 유효 + 이름 검증 완료 + 이름 변경 없음
 *
 * @returns boolean - 제출 가능 여부
 */

export const useCreateFontSubmitReady = () => {
  const {
    watch,
    formState: { isValid },
  } = useFormContext()

  const { isVerified, isDirty } = useVerificationStatus()
  const currentFile = watch(fontAttribute.file.section)

  return !!currentFile && isValid && isVerified && !isDirty
}
