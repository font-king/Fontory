import { useFormContext, useWatch } from 'react-hook-form'

import { Button } from '@/components/Button'
import { InputGroup } from '@/components/inputGroup'

import { FONT_FORM_FIELDS } from '../config/schema.constant'
import type { CreateFontFormType } from '../model/createFont.type'
import { useCreateFont } from '../model/useCreateFont'

import { FontNameFieldWithDuplicateCheck } from './FontNameFieldWithDuplicateCheck'
import { FontTemplateDownload } from './FontTemplateDownload'
import { FontTemplateUpload } from './FontTemplateUpload'
import { useVerificationStatus } from '../model/fontNameVerification.store'

export const CreateFontForm = () => {
  const { isVerified, isDirty } = useVerificationStatus()
  const { handleCreateFont } = useCreateFont()
  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext<CreateFontFormType>()

  const currentFile = useWatch({ name: FONT_FORM_FIELDS.file.section })
  const isSubmitEnabled = !!currentFile && isValid && isVerified && !isDirty

  return (
    <form className="flex-column gap-28" onSubmit={handleSubmit(handleCreateFont)}>
      <div className="flex gap-12">
        <FontTemplateDownload />
        <FontTemplateUpload />
      </div>

      <div className="flex-column gap-11">
        <p className="p4 text-primary">3. 폰트 이름과 예시 문구를 작성해주세요.</p>
        <div className="flex-column gap-11 px-8">
          <FontNameFieldWithDuplicateCheck />

          <InputGroup section="example">
            <InputGroup.Label label="예시 문구" />
            <InputGroup.TextArea placeholder="예시 문구를 입력해주세요." />
          </InputGroup>
        </div>
      </div>

      <p className="p4 text-primary text-right whitespace-pre-wrap">
        {`제작 소요 시간은 약 10분이며,\n‘제작 현황'에서 진행 상황을 확인하실 수 있어요.`}
      </p>

      <Button size="md" type="submit" disabled={!isSubmitEnabled}>
        제작하기
      </Button>
    </form>
  )
}
