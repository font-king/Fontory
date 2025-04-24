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
