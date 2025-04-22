import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { ArrowRightIcon } from './icons/PropIcons'

type Props = {
  size: 'lg' | 'md' | 'sm'
  secondary?: boolean
  withArrow?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const SIZE_STYLES = {
  lg: {
    padding: 'py-[2rem] px-[1.8rem]',
    rounded: 'rounded-[2rem]',
    font: 'text-p5',
  },
  md: {
    padding: 'py-[1.4rem] px-[1.6rem]',
    rounded: 'rounded-[1.6rem]',
    font: 'text-p7',
  },
  sm: {
    padding: 'py-[1rem] px-[1.4rem]',
    rounded: 'rounded-[1.2rem]',
    font: 'text-p8',
  },
}

const BaseButton = ({ size, withArrow, className, children }: PropsWithChildren<Props>) => {
  const buttonStyle = withArrow ? 'flex items-center gap-5' : 'inline-block'

  return (
    <button
      className={`shrink-0 text-white transition-all ${buttonStyle} ${className} ${SIZE_STYLES[size].font} ${SIZE_STYLES[size].rounded} ${SIZE_STYLES[size].padding}`}
    >
      {children}
    </button>
  )
}

const PrimaryButton = (props: PropsWithChildren<Props>) => (
  <BaseButton {...props} className="bg-blue-500 hover:bg-blue-600">
    {props.children}
  </BaseButton>
)

const SecondaryButton = (props: PropsWithChildren<Props>) => (
  <BaseButton {...props} className="bg-grey-500">
    {props.children}
  </BaseButton>
)

export const Button = ({
  size,
  disabled = false,
  type = 'button',
  secondary = false,
  withArrow = false,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  const ButtonComponent = secondary || disabled ? SecondaryButton : PrimaryButton

  return (
    <ButtonComponent type={type} size={size} disabled={disabled} withArrow={withArrow} {...rest}>
      {children}
      {withArrow && <ArrowRightIcon size={size} />}
    </ButtonComponent>
  )
}
