import { createContext, type PropsWithChildren, useContext } from 'react'

import { Input, TextArea } from './Input'
import { Label } from './Label'

export const InputGroupContext = createContext<string | undefined>(undefined)

export const useInputGroupContext = () => {
  const context = useContext(InputGroupContext)

  if (!context) {
    throw new Error('InputGroupContext.* 컴포넌트만 사용 가능합니다.')
  }
  return context
}

type ContainerProps = {
  section: string
}

type InputGroupType = typeof Container & {
  Input: typeof Input
  TextArea: typeof TextArea
  Label: typeof Label
}

const Container = ({ section, children }: PropsWithChildren<ContainerProps>) => {
  return (
    <InputGroupContext.Provider value={section}>
      <div className="flex-column gap-5">{children}</div>
    </InputGroupContext.Provider>
  )
}

export const InputGroup = Object.assign(Container, {
  Input,
  TextArea,
  Label,
}) as InputGroupType
