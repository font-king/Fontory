import { Icon } from '@/components'
import type { SizeType } from '@/types'

type Props = {
  size: SizeType
  src?: string
}

const PROFILE_SIZE = {
  sm: { size: '4.48rem', elementSize: 'w-[4.48rem]', padding: 'p-[0.56rem]' },
  md: { size: '8rem', elementSize: 'w-[8rem]', padding: 'p-[1.0rem]' },
  lg: { size: '14.4rem', elementSize: 'w-[14.4rem]', padding: 'p-[1.8rem]' },
} as const

export const ProfileImage = ({ size, src }: Props) => {
  const { size: iconSize, elementSize, padding } = PROFILE_SIZE[size]

  return (
    <div className="flex-center border-light-text rounded-full border-[0.1rem] p-1">
      <div className="flex-center inline-block overflow-hidden rounded-full">
        {src ? (
          <img src={src} className={elementSize} alt="사용자 프로필 이미지" />
        ) : (
          <Icon name="profile" size={iconSize} className={padding} />
        )}
      </div>
    </div>
  )
}
