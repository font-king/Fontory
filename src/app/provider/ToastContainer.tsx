import { Bounce, ToastContainer } from 'react-toastify'

export const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      closeButton
      autoClose={2000}
      closeOnClick
      pauseOnHover
      transition={Bounce}
    />
  )
}
