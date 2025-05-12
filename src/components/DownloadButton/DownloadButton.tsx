import { Button, Icon } from '@/components'

import { useFontDownloadHandler } from './useFontDownloadHandler'

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
      <Icon name={'download'} size={'2.8rem'} />
    </button>
  )
}
