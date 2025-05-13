import type { Font } from '@/types'

export type EditForm = Pick<Font, 'name' | 'example'>

export type EditRequest = {
  fontId: number
  body: EditForm
}
