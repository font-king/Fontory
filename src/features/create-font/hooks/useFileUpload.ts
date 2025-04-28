import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useFileUpload = (section: string) => {
  const { setValue } = useFormContext()
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setIsLoading(true)

    if (!file) {
      setValue(section, null, { shouldValidate: true })
      toast.error('파일 선택이 취소되었습니다')
      return
    }

    setValue(section, file, { shouldValidate: true })
    setIsLoading(false)
  }

  return { isLoading, handleFileChange }
}
