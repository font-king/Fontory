import { FormProvider } from 'react-hook-form'

import { InputGroup, Modal } from '@/components'
import { MODAL_KEYS } from '@/config'
import { editAttribute, editSchema } from '@/features/detail/config/schema'
import { useFontUpdate } from '@/features/edit-font/hooks/useFontUpdate'
import { useFontDetails } from '@/features/detail/stores/fontDetail.store'
import type { EditForm } from '@/features/detail/type/detail.type'
import { useCustomForm } from '@/hooks'

export const SignupModal = () => {
  const font = useFontDetails()

  const formMethods = useCustomForm<EditForm>(editSchema, {
    defaultValues: { name: font?.name, example: font?.example },
  })

  const { handleSubmit } = formMethods
  const { handleEditFont } = useFontUpdate()

  return (
    <Modal id={MODAL_KEYS.signUp} title="회원가입" onSubmit={handleSubmit(handleEditFont)}>
      <FormProvider {...formMethods}>
        <InputGroup section={editAttribute.name}>
          <InputGroup.Label />
          <InputGroup.Input />
        </InputGroup>

        <InputGroup section={editAttribute.example}>
          <InputGroup.Label />
          <InputGroup.TextArea />
        </InputGroup>
      </FormProvider>
    </Modal>
  )
}
