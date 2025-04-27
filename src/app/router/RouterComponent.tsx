import { Route, Routes } from 'react-router-dom'

import { CreateFont } from '@/pages/CreateFont'
import { Explore } from '@/pages/Explore'
import { FontDetail } from '@/pages/FontDetail'
import { FontProgress } from '@/pages/FontProgress'
import { Home } from '@/pages/Home'
import { MyFont } from '@/pages/MyFont'

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-font" element={<CreateFont />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/detail/:id" element={<FontDetail />} />
      <Route path="/progress" element={<FontProgress />} />
      <Route path="/my-font" element={<MyFont />} />
    </Routes>
  )
}
