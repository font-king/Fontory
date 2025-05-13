import { FontNameDuplicateCheckButton, InputGroup } from '@/components'
import { useVerificationMessage } from '@/components/FontNameDuplicateCheckButton/fontNameVerification.store'

import { fontAttribute } from '../config/schema'

/**
 * 폰트 이름과 예시 문구 입력을 담당하는 필드 컴포넌트
 *
 * - 이름 입력 후 중복 검사 버튼과 메시지 표시 포함
 */

export const FontInputFields = () => {
  const successMessage = useVerificationMessage()

  return (
    <div className="flex-column gap-11">
      <p className="p4 text-primary">3. 폰트 이름과 예시 문구를 작성해주세요.</p>
      <div className="flex-column gap-11 px-8">
        <div className="flex items-end gap-4">
          <InputGroup section={fontAttribute.name} className="grow">
            <InputGroup.Label successMessage={successMessage} />
            <InputGroup.Input />
          </InputGroup>
          <FontNameDuplicateCheckButton />
        </div>

        <InputGroup section={fontAttribute.example}>
          <InputGroup.Label />
          <InputGroup.TextArea />
        </InputGroup>
      </div>
    </div>
  )
}
