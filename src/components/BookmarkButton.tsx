import { MouseEvent } from 'react'
import { Button } from './Button'

import FilledBookmarkIcon from '@/assets/icons/FilledBookmark.svg?react'
import UnfilledBookmarkIcon from '@/assets/icons/UnfilledBookmark.svg?react'

/**
 * @todo 북마크 로직 추가
 */

type Props = {
  fontId: number
  isBookmarked: boolean
  isIconType?: boolean
}

export const BookmarkButton = ({ fontId, isBookmarked, isIconType = false }: Props) => {
  const handleBookmark = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
  }

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
        <UnfilledBookmarkIcon width="2.8rem" height="2.8rem" className="cursor-pointer" />
      ) : (
        <FilledBookmarkIcon width="2.8rem" height="2.8rem" className="cursor-pointer" />
      )}
    </button>
  )
}
