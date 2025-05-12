import type { UseSuspenseQueryResult } from '@tanstack/react-query'

import type { Font, FontDetail } from '@/types'

export type DetailResponse = FontDetail
export type RecommendListResponse = FontDetail[]

export type DetailQueriesResult = [
  UseSuspenseQueryResult<DetailResponse>,
  UseSuspenseQueryResult<RecommendListResponse>,
]

export type EditForm = Pick<Font, 'name' | 'example'>
export type EditRequest = {
  fontId: number
  body: EditForm
}
