import { InputGroup } from '@/shared/ui/inputGroup'

import { fontAttribute } from '../config/schema'
import { useVerificationMessage } from '../stores/verification.store'

import { NameDuplicateCheckButton } from './NameDuplicateCheckButton'

export const NameField = () => {
  const successMessage = useVerificationMessage()

  return (
    <div className="flex items-end gap-4">
      <InputGroup section={fontAttribute.name} className="grow">
        <InputGroup.Label successMessage={successMessage} />
        <InputGroup.Input />
      </InputGroup>

      <NameDuplicateCheckButton />
    </div>
  )
}
