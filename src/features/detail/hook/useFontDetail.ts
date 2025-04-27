import { useEffect } from 'react'

import { useParamFontId } from '@/hooks/useParamFontId'
import { useFetchFontDetail } from '@/queries/useFont.queries'

import { useFontDetailActions } from '../model/fontDetail.store'
import { useFontOwnershipActions } from '../model/fontOwnership.store'

export const useFontDetail = () => {
  const fontId = useParamFontId()
  const queries = useFetchFontDetail({ url: { fontId } })

  const { setFont } = useFontDetailActions()
  const { setOwnership } = useFontOwnershipActions()

  const font = queries[0].data

  useEffect(() => {
    const recommendList = queries[1].data || []

    if (font) {
      setFont({ ...font, recommendList })
      // setOwnership(font.writerName === user?.name)
    }
  }, [font, queries, setFont])

  return { font }
}
