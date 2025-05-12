import { Icon } from '@/components'
import type { SizeType } from '@/types'

type Props = {
  size: SizeType
}

const PROFILE_SIZE = {
  sm: { size: '4.48rem', padding: 'p-[0.56rem]' },
  md: { size: '8rem', padding: 'p-[1.0rem]' },
  lg: { size: '14.4rem', padding: 'p-[1.8rem]' },
}

export const ProfileImage = ({ size }: Props) => {
  return (
    <div className="flex-center border-light-text inline-block rounded-full border-[0.1rem]">
      <Icon
        name={'profile'}
        size={PROFILE_SIZE[size].size}
        className={PROFILE_SIZE[size].padding}
      />
    </div>
  )
}
