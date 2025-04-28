export type Font = {
  id: number
  name: string
  example: string
  bookmarked: boolean
}

type Author = {
  memberId: 1
  writerName: string
}

export type FontMetadata = {
  downloadCount: number
  bookmarkCount: number
}

export type FontDetail = Font & Author & FontMetadata

export type FontType = Font & Pick<Author, 'writerName'>

export type FontWithoutProfileType = Font

export type FontListResponse = {
  content: FontDetail[]
  page: number
  last: boolean
}
