import { Button } from '@/shared/ui/Button'

import { fontAttribute } from '../config/schema'
import { useFontNameDuplicateCheck } from '../hooks/useFontNameDuplicateCheck'
import { useVerificationCheckingState } from '../stores/verification.store'

export const NameDuplicateCheckButton = () => {
  const isDisabled = useVerificationCheckingState()
  const { checkDuplicate } = useFontNameDuplicateCheck(fontAttribute.name.section)

  return (
    <Button size="lg" type="button" onClick={checkDuplicate} disabled={isDisabled}>
      중복 검사
    </Button>
  )
}
