import { SizeType } from '@/types/common'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Props = {
  size: SizeType
  secondary?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const BUTTON_STYLES: Record<SizeType, string> = {
  lg: 'p3 px-[1.8rem] py-[2rem] rounded-[2rem]',
  md: 'p4 px-[1.6rem] py-[1.4rem] rounded-[1.6rem]',
  sm: 'p5 px-[1.4rem] py-[1rem] rounded-[1.2rem]',
}

export const Button = ({
  size,
  secondary = false,
  disabled = false,
  className,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  const buttonStyle =
    secondary || disabled ? 'bg-grey hover:bg-[#747476]' : 'bg-primary hover:bg-black'

  return (
    <button
      disabled={disabled}
      className={`text-light-text shrink-0 transition-all ${className} ${buttonStyle} ${BUTTON_STYLES[size]}`}
      {...rest}
    >
      {children}
    </button>
  )
}
