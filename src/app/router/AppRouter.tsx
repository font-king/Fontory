import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loading } from '@/shared/ui/Loading'

import { routes } from './routes'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
