import { useNavigate, useParams } from 'react-router-dom'

import { ROUTES } from '@/app/router'

export const useParamFontId = (): number => {
  const { id = '' } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const fontId = Number(id)
  if (!id || Number.isNaN(fontId)) {
    navigate(ROUTES.NOT_FOUND, { replace: true })
  }

  return fontId
}
