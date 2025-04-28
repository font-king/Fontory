import type { PropsWithChildren, ReactNode } from 'react'
import ReactDOM from 'react-dom'

import { useModalActions, useModalState } from '@/app/stores'

type Props = {
  id: string
  title: string
  onSubmit: VoidFunction
  children: ReactNode
}

const ModalPortal = ({ children }: PropsWithChildren) => {
  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null

  return ReactDOM.createPortal(children, modalRoot)
}

export const Modal = ({ id, title, onSubmit, children }: Props) => {
  const modalState = useModalState()

  const { closeModal } = useModalActions()

  const isModalOpen = modalState[id]?.isOpen

  if (!isModalOpen) return null

  return (
    <ModalPortal>
      <div className="flex-center fixed inset-0 z-40">
        <button onClick={closeModal} aria-label="모달 닫기" className="bg-dimmed fixed inset-0" />
        <form
          onSubmit={onSubmit}
          className="flex-column rounded-box absolute z-50 min-w-5xl gap-14 bg-white px-16 py-20"
        >
          <div className="flex-between-center">
            <button type="button" onClick={closeModal} className="p3 text-grey cursor-pointer p-1">
              취소
            </button>
            <h5 className="h2 text-primary">{title}</h5>
            <button type="submit" className="p3 text-grey cursor-pointer p-1">
              완료
            </button>
          </div>
          {children}
        </form>
      </div>
    </ModalPortal>
  )
}
