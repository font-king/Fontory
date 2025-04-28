import { useNavigate, useParams } from 'react-router-dom'

export const useParamFontId = (): number => {
  const { id = '' } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const fontId = Number(id)
  if (!id || Number.isNaN(fontId)) {
    navigate('/404', { replace: true })
  }

  return fontId
}
