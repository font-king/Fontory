import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { BookmarkButton } from '@/features/home/ui/BookmarkButton'
import type { FontType } from '@/shared/types/font'

import { DownloadButton } from '../../features/home/ui/DownloadButton'

import { ProfileImage } from './ProfileImage'

type Props = {
  font: FontType
}

export const FontCardWithProfile = ({ font }: Props) => {
  const { id, name: fontName, writerName, example, bookmarked: isBookmarked, woff } = font

  // 추가
  const [isFontReady, setIsFontReady] = useState(false)

  useEffect(() => {
    if (!woff) return

    const fontNameTag = `font-${id}`
    const fontUrlWithCacheBypass = `${woff}`

    const font = new FontFace(fontNameTag, `url(${fontUrlWithCacheBypass})`)

    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont)
        console.log('폰트 로딩 성공:', fontNameTag)
        setIsFontReady(true)
      })
      .catch((err) => {
        console.error('폰트 로딩 실패:', err)
      })
  }, [woff, id])

  return (
    <Link
      to={`/detail/${id}`}
      className="flex-column border-light-text rounded-box gap-11 border-[0.1rem] px-5 py-6"
      style={{ fontFamily: isFontReady ? `font-${id}` : undefined }}
    >
      <div className="flex items-center gap-6">
        <ProfileImage size="sm" />
        <div className="flex-column gap-0.5 overflow-hidden">
          <p className="p2 text-primary overflow-hidden text-ellipsis whitespace-nowrap">
            {fontName}
          </p>
          <p className="p5 text-primary">{writerName}</p>
        </div>
      </div>

      <p className="p3 text-grey grow overflow-hidden break-words">{example}</p>

      <div className="flex items-center gap-5 self-end">
        <DownloadButton fontId={id} fontName={fontName} isIconType />
        <BookmarkButton fontId={id} isBookmarked={isBookmarked} isIconType />
      </div>
    </Link>
  )
}
