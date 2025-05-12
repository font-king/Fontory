import { useEffect, useState } from 'react'

export const useFontLoader = (woffUrl: string | undefined, fontId: number) => {
  const [isFontReady, setIsFontReady] = useState(false)

  useEffect(() => {
    if (!woffUrl) return

    const fontNameTag = `font-${fontId}`
    const fontUrl = `${woffUrl}`

    const font = new FontFace(fontNameTag, `url(${fontUrl})`)

    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont)
        setIsFontReady(true)
      })
      .catch((err) => {
        console.error('폰트 로딩 실패:', err)
      })
  }, [woffUrl, fontId])

  return {
    fontFamily: isFontReady ? `font-${fontId}` : undefined,
    isFontReady,
  }
}
