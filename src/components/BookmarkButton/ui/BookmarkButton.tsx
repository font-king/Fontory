import { Icon } from '@/components'
import { useBookmark } from '@/components/BookmarkButton/hooks/useBookmark'
import { Button } from '@/shared/ui/Button'

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
        <Icon name={'filled-bookmark'} size={'2.8rem'} className="cursor-pointer" />
      ) : (
        <Icon name={'unfilled-bookmark'} size={'2.8rem'} className="cursor-pointer" />
      )}
    </button>
  )
}
