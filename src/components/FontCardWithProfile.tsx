import { Link } from 'react-router-dom'

import { BookmarkButton, DownloadButton, ProfileImage } from '@/components'
import { useFontLoader } from '@/hooks'
import type { FontType } from '@/types'

type Props = {
  font: FontType
}

export const FontCardWithProfile = ({ font }: Props) => {
  const { id, name: fontName, writerName, example, bookmarked: isBookmarked, woff } = font
  const { fontFamily } = useFontLoader(woff, id)

  return (
    <Link
      to={`/detail/${id}`}
      className="flex-column border-light-text rounded-box gap-11 border-[0.1rem] px-5 py-6"
    >
      <div className="flex items-center gap-6">
        <ProfileImage size="sm" />
        <div className="flex-column gap-0.5 overflow-hidden">
          <p
            className="p2 text-primary overflow-hidden text-ellipsis whitespace-nowrap"
            style={{ fontFamily }}
          >
            {fontName}
          </p>
          <p className="p5 text-primary">{writerName}</p>
        </div>
      </div>

      <p className="p3 text-grey grow overflow-hidden break-words" style={{ fontFamily }}>
        {example}
      </p>

      <div className="flex items-center gap-5 self-end">
        <DownloadButton fontId={id} fontName={fontName} isIconType />
        <BookmarkButton fontId={id} isBookmarked={isBookmarked} isIconType />
      </div>
    </Link>
  )
}
