import { Button } from '@/components'
import { fontAttribute } from '@/features/create-font/config/schema'

import { useVerificationCheckingState } from './fontNameVerification.store'
import { useFontNameDuplicateCheck } from './useFontNameDuplicateCheck'

export const FontNameDuplicateCheckButton = () => {
  const isDisabled = useVerificationCheckingState()
  const { checkFontNameDuplicate } = useFontNameDuplicateCheck(fontAttribute.name.section)

  return (
    <Button size="lg" type="button" onClick={checkFontNameDuplicate} disabled={isDisabled}>
      중복 검사
    </Button>
  )
}
