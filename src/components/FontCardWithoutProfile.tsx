import { Link } from 'react-router-dom'

import CaretRight from '@/assets/icons/CaretRight.svg?react'
import type { FontWithoutProfileType } from '@/types/font'

import { BookmarkButton } from './BookmarkButton'
import { DownloadButton } from './DownloadButton'

type Props = {
  font: FontWithoutProfileType
}

export const FontCardWithoutProfile = ({ font }: Props) => {
  const { id, name: fontName, example, bookmarked } = font

  return (
    <Link
      to={`/detail/${id}`}
      className="flex-column border-light-text rounded-box gap-6 border-[0.1rem] p-6"
    >
      <div className="flex-between-center overflow-hidden">
        <p className="p2 text-primary overflow-hidden text-ellipsis whitespace-nowrap">
          {fontName}
        </p>
        <CaretRight width="2.4rem" height="2.4rem" />
      </div>

      <p className="p3 text-grey grow overflow-hidden break-words">{example}</p>

      <div className="flex items-center gap-5 self-end">
        <DownloadButton isIconType />
        <BookmarkButton fontId={id} isBookmarked={bookmarked} isIconType />
      </div>
    </Link>
  )
}
