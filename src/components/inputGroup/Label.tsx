import { useFormContext } from 'react-hook-form'
import { useInputGroupContext } from '.'

type LabelProps = {
  label: string
  successMessage?: string | null
  errorMessage?: string | null
}

export const Label = ({ successMessage, errorMessage, label }: LabelProps) => {
  const {
    formState: { errors },
  } = useFormContext()
  const section = useInputGroupContext()

  const currentErrorMessage = errors[section]?.message?.toString()
  const isError = !!currentErrorMessage || !!errorMessage

  return (
    <div className="flex items-center gap-5">
      <label className="h4 text-primary" htmlFor={section}>
        {label}
      </label>
      <p className={`p5 ${isError ? 'text-warn' : 'text-success'}`}>
        * {currentErrorMessage || errorMessage || successMessage}
      </p>
    </div>
  )
}
