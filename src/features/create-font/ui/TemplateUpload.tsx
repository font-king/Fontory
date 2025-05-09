import { useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { Button } from '@/shared/ui/Button'

import { fontAttribute } from '../config/schema'
import { useFileUpload } from '../hooks/useFileUpload'

export const TemplateUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    formState: { errors },
  } = useFormContext()

  const section = fontAttribute.file.section

  const currentFile = useWatch({ name: section })
  const { isLoading, handleFileChange } = useFileUpload(section)

  const handleOpenFileDialog = () => inputRef.current?.click()

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

      <Button size="md" onClick={handleOpenFileDialog} disabled={isLoading}>
        {!!currentFile ? '파일 변경' : '파일 업로드'}
      </Button>
    </div>
  )
}
