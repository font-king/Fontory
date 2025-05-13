import { Button } from '@/components'

import { useCreateFontSubmitReady } from '../hooks/useCreateFontSubmitReady'

/**
 * 폰트 생성 폼 제출 버튼
 */

export const SubmitButton = () => {
  const isSubmitEnabled = useCreateFontSubmitReady()

  return (
    <Button size="md" type="submit" disabled={!isSubmitEnabled}>
      제작하기
    </Button>
  )
}
