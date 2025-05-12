import { FormProvider } from 'react-hook-form'

import { Button, InputGroup } from '@/components'
import { useCustomForm } from '@/hooks'

import { fontAttribute, fontSchema } from '../config/schema'
import { useCreateFontForm } from '../hooks/useCreateFontForm'
import type { CreateForm } from '../type/createFont.type'

import { NameField } from './NameField'
import { TemplateDownload } from './TemplateDownload'
import { TemplateUpload } from './TemplateUpload'

export const CreateFontForm = () => {
  const formMethods = useCustomForm<CreateForm>(fontSchema)

  const { handleSubmitForm } = useCreateFontForm()
  // const { isVerified, isDirty } = useVerificationStatus()

  const {
    watch,
    handleSubmit,
    formState: { isValid },
  } = formMethods

  const currentFile = watch(fontAttribute.file.section)
  const isSubmitEnabled = !!currentFile && isValid
  // const isSubmitEnabled = !!currentFile && isValid && isVerified && !isDirty

  return (
    <FormProvider {...formMethods}>
      <form className="flex-column gap-28" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex gap-12">
          <TemplateDownload />
          <TemplateUpload />
        </div>

        <div className="flex-column gap-11">
          <p className="p4 text-primary">3. 폰트 이름과 예시 문구를 작성해주세요.</p>
          <div className="flex-column gap-11 px-8">
            <NameField />

            <InputGroup section={fontAttribute.example}>
              <InputGroup.Label />
              <InputGroup.TextArea />
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
    </FormProvider>
  )
}
