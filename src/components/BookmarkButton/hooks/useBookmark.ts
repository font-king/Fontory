import type { MouseEvent } from 'react'
import { toast } from 'react-toastify'

import { useAddBookmark, useRemoveBookmark } from '../apis/bookmark.mutation'

export const useBookmark = (fontId: number, isBookmarked: boolean) => {
  const { mutate: addBookmark } = useAddBookmark()
  const { mutate: removeBookmark } = useRemoveBookmark()

  const handleBookmark = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()

    if (isBookmarked) {
      removeBookmark(fontId, {
        onSuccess: () => toast.success('성공적으로 북마크에서 삭제되었습니다.'),
        onError: () => toast.error('북마크 삭제에 실패했습니다. 다시 시도해 주세요.'),
      })
    }

    if (!isBookmarked) {
      addBookmark(fontId, {
        onSuccess: () => toast.success('성공적으로 북마크에 추가되었습니다.'),
        onError: () => toast.error('북마크 추가에 실패했습니다. 다시 시도해 주세요.'),
      })
    }
  }

  return { handleBookmark }
}
