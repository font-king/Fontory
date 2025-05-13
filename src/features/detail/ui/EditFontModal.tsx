import { FormProvider } from 'react-hook-form'

import { InputGroup, Modal } from '@/components'
import { MODAL_KEYS } from '@/config'
import { editAttribute, editSchema } from '@/features/detail/config/schema'
import { useFontUpdate } from '@/features/detail/hook/useFontUpdate'
import { useFontDetails } from '@/features/detail/stores/fontDetail.store'
import type { EditForm } from '@/features/detail/type/detail.type'
import { useCustomForm } from '@/hooks'

/**
 * 폰트 수정 모달
 *
 * - 수정 완료 시 토스트 + 모달 닫힘
 */

export const EditFontModal = () => {
  const font = useFontDetails()

  const formMethods = useCustomForm<EditForm>(editSchema, {
    defaultValues: { name: font?.name, example: font?.example },
  })

  const { handleSubmit } = formMethods
  const { handleEditFont } = useFontUpdate()

  return (
    <Modal id={MODAL_KEYS.editFont} title="내 폰트 수정" onSubmit={handleSubmit(handleEditFont)}>
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
