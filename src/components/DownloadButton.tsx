import type { MouseEvent } from 'react'

import DownloadIcon from '@/assets/icons/Download.svg?react'

import { Button } from './Button'

/**
 * @todo 다운로드 로직 추가
 */

type Props = {
  isIconType?: boolean
}

export const DownloadButton = ({ isIconType = false }: Props) => {
  const handleDownload = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
  }

  if (!isIconType) {
    return (
      <Button size="sm" aria-label="폰트 다운로드" onClick={handleDownload}>
        다운로드
      </Button>
    )
  }

  return (
    <button type="button" onClick={handleDownload} className="cursor-pointer">
      <DownloadIcon width="2.8rem" height="2.8rem" />
    </button>
  )
}
