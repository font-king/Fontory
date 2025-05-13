import { FormProvider } from 'react-hook-form'

import { Button, FontNameDuplicateCheckButton, InputGroup, SectionLayout } from '@/components'
import { useVerificationMessage } from '@/components/FontNameDuplicateCheckButton/fontNameVerification.store'
import { useFontDetails } from '@/features/detail/stores/fontDetail.store'
import { useCustomForm } from '@/hooks'

import { editAttribute, editSchema } from '../config/schema'
import { useFontUpdate } from '../hooks/useFontUpdate'
import type { EditForm } from '../types/editFont.type'

const EditFontPage = () => {
  const font = useFontDetails()
  const successMessage = useVerificationMessage()

  const formMethods = useCustomForm<EditForm>(editSchema, {
    defaultValues: { name: font?.name, example: font?.example },
  })

  const { handleSubmit } = formMethods
  const { handleEditFont } = useFontUpdate()

  return (
    <SectionLayout title="폰트 수정">
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(handleEditFont)} className="flex-column gap-16">
          <div className="flex items-end gap-4">
            <InputGroup section={editAttribute.name} className="grow">
              <InputGroup.Label successMessage={successMessage} />
              <InputGroup.Input />
            </InputGroup>
            <FontNameDuplicateCheckButton />
          </div>

          <InputGroup section={editAttribute.example}>
            <InputGroup.Label />
            <InputGroup.TextArea />
          </InputGroup>

          <Button size="lg" type="submit" className="mt-50">
            수정 완료
          </Button>
        </form>
      </FormProvider>
    </SectionLayout>
  )
}

export default EditFontPage
