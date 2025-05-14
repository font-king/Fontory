import { useFormContext, useWatch } from 'react-hook-form'

import { Button } from '@/components'
import { useVerificationStatus } from '@/components/NicknameDuplicateCheckButton/nicknameVerification.store'

import { signupAttribute } from '../config/signup.schema'

export const SignupButton = () => {
  const { isVerified } = useVerificationStatus()
  const { control } = useFormContext()

  const terms = useWatch({ control, name: signupAttribute.terms.section })

  return (
    <Button size="lg" type="submit" className="mt-50" disabled={!terms || !isVerified}>
      회원가입
    </Button>
  )
}
