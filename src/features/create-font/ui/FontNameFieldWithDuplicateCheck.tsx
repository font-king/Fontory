import { Button } from '@/components/Button'
import { InputGroup } from '@/components/inputGroup'

import { FONT_FORM_FIELDS } from '../config/schema.constant'
import {
  useVerificationCheckingState,
  useVerificationMessage,
} from '../model/fontNameVerification.store'
import { useFontNameDuplicateCheck } from '../model/useFontNameDuplicateCheck'

export const FontNameFieldWithDuplicateCheck = () => {
  const isDisabled = useVerificationCheckingState()
  const successMessage = useVerificationMessage()
  const { checkDuplicate } = useFontNameDuplicateCheck(FONT_FORM_FIELDS.name.section)

  return (
    <div className="flex items-end gap-4">
      <InputGroup section={FONT_FORM_FIELDS.name.section} className="grow">
        <InputGroup.Label label={FONT_FORM_FIELDS.name.label} successMessage={successMessage} />
        <InputGroup.Input {...FONT_FORM_FIELDS.name.input} />
      </InputGroup>

      <Button size="lg" type="button" onClick={checkDuplicate} disabled={isDisabled}>
        중복 검사
      </Button>
    </div>
  )
}
