import { z } from 'zod'

export const EDIT_FONT_FIELDS = {
  NAME: {
    section: 'name',
    label: '폰트 이름',
    input: { placeholder: '폰트 이름을 입력해주세요.' },
  },
  EXAMPLE: {
    section: 'example',
    label: '예시 문구',
    input: { placeholder: '예시 문구를 입력해주세요.' },
  },
}

export const editFontSchema = z.object({
  name: z
    .string()
    .min(1, { message: '폰트 이름을 입력해주세요.' })
    .max(9, { message: '폰트 이름은 9글자까지 입력 가능합니다.' }),
  example: z
    .string()
    .min(1, { message: '예시 문구를 입력해주세요.' })
    .max(50, { message: '예시 문구는 50글자까지 입력 가능합니다.' }),
})
