import { Bounce, ToastContainer } from 'react-toastify'

export const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      closeButton
      autoClose={2000}
      closeOnClick
      pauseOnHover
      transition={Bounce}
      style={{ fontSize: '14px' }}
    />
  )
}
