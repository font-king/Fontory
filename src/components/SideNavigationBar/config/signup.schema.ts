import { z } from 'zod'

export const editAttribute = {
  nickname: {
    section: 'nickname',
    label: '닉네임',
    input: { placeholder: '닉네임을 입력해주세요.' },
  },
  file: {
    section: 'file',
  },
}

export const editSchema = z.object({
  name: z
    .string()
    .min(1, { message: '닉네임을 입력해주세요.' })
    .max(9, { message: '닉네임은 9글자까지 입력 가능합니다.' }),
  nickname: z.boolean(),
  file: z
    .custom<File>((val) => val instanceof File, '파일을 업로드해주세요.')
    .refine((file) => file.size > 0, '파일을 업로드해주세요.'),
})
