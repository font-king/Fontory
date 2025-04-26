import { Route, Routes } from 'react-router-dom'

import { CreateFont } from '@/pages/CreateFont'
import { Explore } from '@/pages/Explore'
import { Home } from '@/pages/Home'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-font" element={<CreateFont />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  )
}
