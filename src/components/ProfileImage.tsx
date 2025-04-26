import ProfileIcon from '@/assets/icons/Profile.svg?react'
import type { SizeType } from '@/types/common'

type Props = {
  size: SizeType
}

const PROFILE_SIZE = {
  sm: { size: '4.48rem', padding: '5.6rem' },
  md: { size: '8rem', padding: '1rem' },
  lg: { size: '1.44rem', padding: '1.8rem' },
}

export const ProfileImage = ({ size }: Props) => {
  return (
    <div className="flex-center border-light-text inline-block rounded-full border-[0.1rem]">
      <ProfileIcon
        width={PROFILE_SIZE[size].size}
        height={PROFILE_SIZE[size].size}
        className={PROFILE_SIZE[size].padding}
      />
    </div>
  )
}
