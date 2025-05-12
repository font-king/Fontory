import { Button } from '@/components'

import { fontAttribute } from '../config/schema'
import { useFontNameDuplicateCheck } from '../hooks/useFontNameDuplicateCheck'
import { useVerificationActions, useVerificationCheckingState } from '../stores/verification.store'

export const NameDuplicateCheckButton = () => {
  const isDisabled = useVerificationCheckingState()
  const { checkDuplicate } = useFontNameDuplicateCheck(fontAttribute.name.section)

  // 테스트용
  const { updateVerificationStatus, setVerificationMessage, startChecking, completeChecking } =
    useVerificationActions()

  const testHandler = () => {
    updateVerificationStatus({ isDirty: false, isVerified: true })
    setVerificationMessage('사용 가능한 이름입니다.')
  }
  // 테스트용 끝

  return (
    <Button size="lg" type="button" onClick={testHandler} disabled={isDisabled}>
      {/* <Button size="lg" type="button" onClick={checkDuplicate} disabled={isDisabled}> */}
      중복 검사
    </Button>
  )
}
