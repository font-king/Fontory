import { useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { Button } from '@/components'

import { fontAttribute } from '../config/schema'
import { useFileUpload } from '../hooks/useFileUpload'

/**
 * 사용자로부터 이미지 템플릿 파일을 업로드받는 컴포넌트
 *
 * - 파일 선택 시 React Hook Form 상태에 반영되고, 중복 선택 방지와 에러 메시지를 처리함
 */

export const TemplateUpload = () => {
  const section = fontAttribute.file.section
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    formState: { errors },
  } = useFormContext()

  const currentFile = useWatch({ name: section })
  const buttonLabel = currentFile ? '파일 변경' : '파일 업로드'

  const { isLoading, handleFileChange } = useFileUpload(section)

  const openFileDialog = () => inputRef.current?.click()

  return (
    <div className="flex-column grow gap-11">
      <p className="p4 text-primary">2. 작성하신 템플릿을 업로드해주세요.</p>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {errors.file && <p className="p5 text-warn">{errors.file.message as string}</p>}

      <Button size="md" onClick={openFileDialog} disabled={isLoading}>
        {buttonLabel}
      </Button>
    </div>
  )
}
