import DownloadIcon from '@/assets/icons/Download.svg?react'
import { Button } from '@/shared/ui/Button'

import { useFontDownloadHandler } from '../hooks/useFontDownloadHandler'

type Props = {
  fontId: number
  fontName: string
  isIconType?: boolean
}

export const DownloadButton = ({ fontId, fontName, isIconType = false }: Props) => {
  const { handleDownload } = useFontDownloadHandler(fontId, fontName)

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
