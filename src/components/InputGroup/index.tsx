import { createContext, type PropsWithChildren, useContext } from 'react'

import { Input, TextArea } from './Input'
import { Label } from './Label'

type SectionContextType = {
  section: string
  label?: string
  input?: {
    placeholder?: string
  }
}

type ContainerProps = {
  section: SectionContextType
  className?: string
}

type InputGroupType = typeof Container & {
  Input: typeof Input
  TextArea: typeof TextArea
  Label: typeof Label
}

export const InputGroupContext = createContext<SectionContextType | undefined>(undefined)

export const useInputGroupContext = () => {
  const context = useContext(InputGroupContext)

  if (!context) {
    throw new Error('InputGroupContext.* 컴포넌트만 사용 가능합니다.')
  }
  return context
}

const Container = ({ section, className, children }: PropsWithChildren<ContainerProps>) => {
  return (
    <InputGroupContext.Provider value={section}>
      <div className={`flex-column gap-5 ${className}`}>{children}</div>
    </InputGroupContext.Provider>
  )
}

export const InputGroup = Object.assign(Container, {
  Input,
  TextArea,
  Label,
}) as InputGroupType
