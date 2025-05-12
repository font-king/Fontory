import type { MouseEvent } from 'react'

import { useFontDownload } from './download.query'

export const useFontDownloadHandler = (fontId: number, fontName: string) => {
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

  return { handleDownload }
}
