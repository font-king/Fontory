type Font = {
  id: number
  name: string
  example: string
  bookmarked: boolean
}

type Author = {
  memberId: 1
  writerName: string
}

type FontMetadata = {
  downloadCount: number
  bookmarkCount: number
}

type Progress = {
  createdAt: string
  status: 'PROGRESS' | 'COMPLETE'
}

type FontDetail = Font & Author & FontMetadata

export type FontType = Font & Pick<Author, 'writerName'>

export type FontWithoutProfileType = Font

export type PopularFontListResponse = FontDetail[]

export type ExploreFontListRequest = {
  url: { page?: unknown; sortBy: string; keyword: string }
}
export type ExploreFontListResponse = {
  content: FontDetail[]
  last: boolean
}

export type BookmarkFontListRequest = {
  url: { page?: unknown; keyword: string }
}
export type BookmarkFontListResponse = {
  content: FontDetail[]
  last: boolean
}

export type CustomFontListRequest = {
  url: { page?: unknown; keyword: string }
}
export type CustomFontListResponse = {
  content: FontDetail[]
  last: boolean
}

export type DownloadFontRequest = {
  url: { fontId: number }
}

export type DeleteFontRequest = {
  url: { fontId: number }
}

export type FontDetailRequest = {
  url: { fontId: number }
}
export type FontDetailResponse = FontDetail
export type RecommendListResponse = FontDetail[]

export type EditFontForm = Pick<Font, 'name' | 'example'>
export type EditFontRequest = {
  url: { fontId: number }
  body: EditFontForm
}

export type FontProgressResponse = (Pick<Font, 'id' | 'name'> & Progress)[]

export type FontRankingResponse = (FontMetadata & Omit<Font, 'writerName'>)[]

export type BookmarkRequest = {
  url: { fontId: number }
}
