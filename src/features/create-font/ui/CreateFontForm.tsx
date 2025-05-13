import { FormProvider } from 'react-hook-form'

import { useCustomForm } from '@/hooks'

import { fontSchema } from '../config/schema'
import { useCreateFontForm } from '../hooks/useCreateFontForm'
import type { CreateForm } from '../type/createFont.type'

import { FontInputFields } from './FontInputFields'
import { SubmitButton } from './SubmitButton'
import { TemplateDownload } from './TemplateDownload'
import { TemplateUpload } from './TemplateUpload'

export const CreateFontForm = () => {
  const formMethods = useCustomForm<CreateForm>(fontSchema)

  const { handleSubmit } = formMethods
  const { handleSubmitForm } = useCreateFontForm()

  return (
    <FormProvider {...formMethods}>
      <form className="flex-column gap-28" onSubmit={handleSubmit(handleSubmitForm)}>
        {/* 템플릿 업로드 섹션 */}
        <div className="flex gap-12">
          <TemplateDownload />
          <TemplateUpload />
        </div>

        {/* 폰트 이름 / 예시 문구 / 전화 번호 입력 섹션 */}
        <FontInputFields />

        {/* 안내 문구 */}
        <p className="p4 text-primary text-right whitespace-pre-wrap">
          {`제작 소요 시간은 약 10분이며,\n‘제작 현황'에서 진행 상황을 확인하실 수 있어요.`}
        </p>

        {/* 제출 버튼 */}
        <SubmitButton />
      </form>
    </FormProvider>
  )
}
