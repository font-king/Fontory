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
      <p className="p4 text-primary">
        3. 다음 내용들을 작성해주세요. 폰트 제작이 완료되면 작성하신 번호로 문자를 보내드려요.
      </p>
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

        <InputGroup section={fontAttribute.phone}>
          <InputGroup.Label />
          <InputGroup.NumberInput />
        </InputGroup>
      </div>
    </div>
  )
}
