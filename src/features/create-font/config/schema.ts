import { z } from 'zod'

export const fontAttribute = {
  name: {
    section: 'name',
    label: '폰트 이름',
    input: { placeholder: '폰트 이름을 입력해주세요.' },
  },
  example: {
    section: 'example',
    label: '예시 문구',
    input: { placeholder: '예시 문구를 입력해주세요.' },
  },
  file: {
    section: 'file',
  },
} as const

export const fontSchema = z.object({
  name: z
    .string()
    .min(1, { message: '폰트 이름을 입력해주세요.' })
    .max(9, { message: '폰트 이름은 9글자까지 입력 가능합니다.' }),
  example: z
    .string()
    .min(1, { message: '예시 문구를 입력해주세요.' })
    .max(50, { message: '예시 문구는 50글자까지 입력 가능합니다.' }),
  file: z
    .custom<File>((val) => val instanceof File, '파일을 업로드해주세요.')
    .refine((file) => file.size > 0, '파일을 업로드해주세요.'),
})
