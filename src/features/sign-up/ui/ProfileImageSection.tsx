import { useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, ProfileImage } from '@/components'

import { signupAttribute } from '../config/signup.schema'

export const ProfileImageSection = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const sectionName = signupAttribute.file.section

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const { setValue } = useFormContext()

  const handleResetImage = () => {
    setPreviewUrl(null)
    setValue(sectionName, null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleClickUpload = () => {
    inputRef.current?.click()
  }

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    setPreviewUrl(imageUrl)
    setValue(sectionName, file)
  }

  return (
    <div className="ml-14 flex items-center justify-around">
      <ProfileImage size="lg" src={previewUrl || undefined} />

      <div className="flex-column w-[18.3rem] gap-7">
        <Button size="md" onClick={handleResetImage}>
          기본 이미지로 설정
        </Button>
        <Button size="md" secondary onClick={handleClickUpload}>
          이미지 업로드
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChangeFile}
        />
      </div>
    </div>
  )
}
