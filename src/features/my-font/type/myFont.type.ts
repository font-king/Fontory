import type { ProgressStatus } from '@/config'
import type { Font, FontMetadata } from '@/types'

type Progress = {
  createdAt: string
  status: ProgressStatus
}

export type FontProgress = (Pick<Font, 'id' | 'name'> & Progress)[]
export type FontRanking = (FontMetadata & Omit<Font, 'writerName'>)[]
