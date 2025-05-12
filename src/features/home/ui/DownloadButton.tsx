import type { MouseEvent } from 'react'

import DownloadIcon from '@/assets/icons/Download.svg?react'
import { useFontDownload } from '@/features/home/api/home.query'
import { Button } from '@/shared/ui/Button'

type Props = {
  fontId: number
  fontName: string
  isIconType?: boolean
}

export const DownloadButton = ({ fontId, fontName, isIconType = false }: Props) => {
  const { refetch } = useFontDownload(fontId)

  const handleDownload = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()

    const { data } = await refetch()
    if (!data?.ttf) return

    try {
      const response = await fetch(data.ttf)
      const blob = await response.blob()

      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `${fontName}.ttf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(a.href)
    } catch (error) {
      console.error('폰트 다운로드 실패:', error)
    }
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
