import { FormProvider } from 'react-hook-form'

import { InputGroup, SectionLayout } from '@/components'
import { NicknameDuplicateCheckButton } from '@/components/NicknameDuplicateCheckButton/NicknameDuplicateCheckButton'
import { useVerificationMessage } from '@/components/NicknameDuplicateCheckButton/nicknameVerification.store'
import { useCustomForm } from '@/hooks'

import type { SignupFormType } from '../config/signup.schema'
import { signupAttribute, signupSchema } from '../config/signup.schema'
import { useSignupForm } from '../hooks/useCreateFontForm'
import { ProfileImageSection } from '../ui/ProfileImageSection'
import { SignupButton } from '../ui/SignupButton'
import { TermsAgreement } from '../ui/TermsAgreement'

const SignupPage = () => {
  const successMessage = useVerificationMessage()
  const formMethods = useCustomForm<SignupFormType>(signupSchema)

  const { handleSubmit } = formMethods
  const { handleSubmitForm } = useSignupForm()

  return (
    <SectionLayout title="회원가입">
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex-column gap-16">
          <ProfileImageSection />

          <div className="flex items-end gap-4">
            <InputGroup section={signupAttribute.nickname} className="grow">
              <InputGroup.Label
                errorMessage={formMethods.formState.errors.nickname?.message}
                successMessage={successMessage}
              />
              <InputGroup.Input />
            </InputGroup>
            <NicknameDuplicateCheckButton />
          </div>

          <TermsAgreement />

          <SignupButton />
        </form>
      </FormProvider>
    </SectionLayout>
  )
}

export default SignupPage
