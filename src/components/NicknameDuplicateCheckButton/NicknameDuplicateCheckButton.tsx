import { Button } from '@/components'
import { signupAttribute } from '@/features/sign-up/config/signup.schema'

import { useVerificationCheckingState } from './nicknameVerification.store'
import { useNicknameDuplicateCheck } from './useNicknameDuplicateCheck'
import { useNicknameVerificationWatcher } from './useNicknameVerificationWatcher'

export const NicknameDuplicateCheckButton = () => {
  const fieldName = signupAttribute.nickname.section
  const isChecking = useVerificationCheckingState()

  const { checkNicknameDuplicate } = useNicknameDuplicateCheck(fieldName)
  const { markAsVerified } = useNicknameVerificationWatcher(fieldName)

  const handleCheckDuplicate = () => {
    checkNicknameDuplicate()
    markAsVerified()
  }

  return (
    <Button size="lg" type="button" onClick={handleCheckDuplicate} disabled={isChecking}>
      중복 검사
    </Button>
  )
}
