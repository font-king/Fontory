import { useFormContext } from 'react-hook-form'

import { useInputGroupContext } from '.'

type LabelProps = {
  successMessage?: string | null
  errorMessage?: string | null
}

export const Label = ({ successMessage, errorMessage }: LabelProps) => {
  const {
    formState: { errors },
  } = useFormContext()
  const { section, label } = useInputGroupContext()

  const currentErrorMessage = errors[section]?.message?.toString()
  const isError = !!currentErrorMessage || !!errorMessage
  const message = currentErrorMessage || errorMessage || successMessage

  return (
    <div className="flex items-center gap-5">
      <label className="h4 text-primary" htmlFor={section}>
        {label}
      </label>
      {message && <p className={`p5 ${isError ? 'text-warn' : 'text-success'}`}>* {message}</p>}
    </div>
  )
}
