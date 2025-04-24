import { Home } from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
