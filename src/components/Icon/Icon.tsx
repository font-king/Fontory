import { Suspense } from 'react'

import { type IconComponent, iconMap, type IconName } from './iconMap'

type IconProps = {
  name: IconName
  size?: number
  className?: string
} & React.SVGProps<SVGSVGElement>

export const Icon = ({ name, size = 24, className = '', ...props }: IconProps) => {
  const SvgIcon: IconComponent | undefined = iconMap[name]

  if (!SvgIcon) {
    console.error(`"${name}" 아이콘은 등록되어있지 않습니다.`)
    return null
  }

  return (
    <Suspense fallback={null}>
      <SvgIcon width={size} height={size} className={className} {...props} />
    </Suspense>
  )
}
