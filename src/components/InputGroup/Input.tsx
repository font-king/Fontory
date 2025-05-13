import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { useInputGroupContext } from '.'

export const Input = ({ type = 'text', ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  const { register } = useFormContext()
  const { section, input } = useInputGroupContext()

  return (
    <div className="rounded-box border-light-text border px-10 py-8">
      <input
        id={section}
        type={type}
        {...register(section)}
        className="p3 text-primary placeholder:text-placeholder w-full"
        {...input}
        {...rest}
      />
    </div>
  )
}

export const TextArea = ({ ...rest }: InputHTMLAttributes<HTMLTextAreaElement>) => {
  const { register } = useFormContext()
  const { section, input } = useInputGroupContext()

  return (
    <div className="rounded-box border-light-text border px-10 py-8">
      <textarea
        id={section}
        {...register(section)}
        className="p3 text-primary placeholder:text-placeholder w-full resize-none"
        rows={3}
        {...input}
        {...rest}
      />
    </div>
  )
}

export const NumberInput = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  const { register } = useFormContext()
  const { section, input } = useInputGroupContext()

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    input.value = input.value.replace(/[^0-9]/g, '')
  }

  return (
    <div className="rounded-box border-light-text border px-10 py-8">
      <input
        id={section}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        onInput={handleInput}
        {...register(section)}
        className="p3 text-primary placeholder:text-placeholder w-full"
        {...input}
        {...rest}
      />
    </div>
  )
}
