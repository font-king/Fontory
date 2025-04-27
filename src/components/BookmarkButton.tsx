import FilledBookmarkIcon from '@/assets/icons/FilledBookmark.svg?react'
import UnfilledBookmarkIcon from '@/assets/icons/UnfilledBookmark.svg?react'
import { useBookmark } from '@/hooks/useBookmark'

import { Button } from './Button'

type Props = {
  fontId: number
  isBookmarked: boolean
  isIconType?: boolean
}

export const BookmarkButton = ({ fontId, isBookmarked, isIconType = false }: Props) => {
  const { handleBookmark } = useBookmark(fontId, isBookmarked)

  if (!isIconType) {
    return (
      <Button size="sm" onClick={handleBookmark}>
        {isBookmarked ? '북마크 취소' : '북마크'}
      </Button>
    )
  }

  return (
    <button type="button" onClick={handleBookmark}>
      {isBookmarked ? (
        <FilledBookmarkIcon width="2.8rem" height="2.8rem" className="cursor-pointer" />
      ) : (
        <UnfilledBookmarkIcon width="2.8rem" height="2.8rem" className="cursor-pointer" />
      )}
    </button>
  )
}
