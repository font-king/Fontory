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

export type FontType = Font & Pick<Author, 'writerName'>

export type FontWithoutProfileType = Font

export type PopularFontListResponse = (Font & Author & FontMetadata)[]

export type ExploreFontListRequest = {
  url: { page?: unknown; sortBy: string; keyword: string }
}
export type ExploreFontListResponse = {
  content: (Font & Author & FontMetadata)[]
  last: boolean
}

export type DownloadFontRequest = {
  url: { fontId: number }
}
