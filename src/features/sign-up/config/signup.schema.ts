import { z } from 'zod'

//   nickname: string
//   gender: string
//   profileImageUrl: string
//   birth: string
//   terms: boolean
// }

// type AuthMetadata = {
//   createdAt: string

export const signupAttribute = {
  nickname: {
    section: 'nickname',
    label: '닉네임',
    input: { placeholder: '닉네임을 입력해주세요.' },
  },
  terms: {
    section: 'terms',
    label: '이용 약관 동의',
  },
} as const

export const signupSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: '닉네임을 입력해주세요.' })
    .max(8, { message: '닉네임은 8자 이내로 입력해주세요.' }),
  // terms: z.literal(true).refine((val) => val === true, {
  //   message: '이용약관에 동의해야 회원가입이 가능합니다.',
  // }),
  terms: z.literal(true, {
    errorMap: () => ({ message: '모든 약관에 동의해야 회원가입이 가능합니다.' }),
  }),
})

export type SignupFormType = z.infer<typeof signupSchema> & {
  checkedTerms?: {
    service: boolean
    privacy: boolean
    distribution: boolean
  }
}
