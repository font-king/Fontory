import { FormProvider } from 'react-hook-form'

import { SectionLayout } from '@/components/SectionLayout'
import { fontFormSchema } from '@/features/create-font/config/schema.constant'
import type { CreateFontFormType } from '@/features/create-font/model/createFont.type'
import { CreateFontForm } from '@/features/create-font/ui/CreateFontForm'
import { useCustomForm } from '@/hooks/useCustomForm'

export const CreateFont = () => {
  const formMethods = useCustomForm<CreateFontFormType>(fontFormSchema)

  return (
    <SectionLayout title="폰트 제작">
      <FormProvider {...formMethods}>
        <CreateFontForm />
      </FormProvider>
    </SectionLayout>
  )
}
