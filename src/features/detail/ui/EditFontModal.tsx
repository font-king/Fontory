import { FormProvider } from 'react-hook-form'

import { InputGroup } from '@/components/inputGroup'
import { Modal } from '@/components/Modal'
import { MODAL_KEYS } from '@/constants/modalKeys'
import { useCustomForm } from '@/hooks/useCustomForm'
import type { EditFontForm } from '@/types/font'

import { EDIT_FONT_FIELDS, editFontSchema } from '../config/schema'
import { useEditFont } from '../hook/useEditFont'
import { useFontDetails } from '../model/fontDetail.store'

export const EditFontModal = () => {
  const font = useFontDetails()

  const formMethods = useCustomForm<EditFontForm>(editFontSchema, {
    defaultValues: { name: font?.name, example: font?.example },
  })

  const { handleSubmit } = formMethods
  const { handleEditFont } = useEditFont()

  const { NAME, EXAMPLE } = EDIT_FONT_FIELDS

  return (
    <Modal id={MODAL_KEYS.editFont} title="내 폰트 수정" onSubmit={handleSubmit(handleEditFont)}>
      <FormProvider {...formMethods}>
        <InputGroup section={NAME.section}>
          <InputGroup.Label label={NAME.label} />
          <InputGroup.Input {...NAME.input} />
        </InputGroup>

        <InputGroup section={EXAMPLE.section}>
          <InputGroup.Label label={EXAMPLE.label} />
          <InputGroup.TextArea {...EXAMPLE.input} />
        </InputGroup>
      </FormProvider>
    </Modal>
  )
}
