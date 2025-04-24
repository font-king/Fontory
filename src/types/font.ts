type Font = {
  id: number
  name: string
  writerName: string
  example: string
  bookmarked: boolean
}

export type FontType = Font

export type FontWithoutProfileType = Omit<Font, 'writerName'>
