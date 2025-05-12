import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/features/home/entry/Home'))
const CreateFont = lazy(() => import('@/pages/CreateFont'))
const Explore = lazy(() => import('@/pages/Explore'))
const FontDetail = lazy(() => import('@/pages/FontDetail'))
const FontProgress = lazy(() => import('@/pages/FontProgress'))
const MyFont = lazy(() => import('@/pages/MyFont'))
const Bookmark = lazy(() => import('@/pages/Bookmark'))
const MyCustomFont = lazy(() => import('@/pages/MyCustomFont'))

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/create-font', element: <CreateFont /> },
  { path: '/explore', element: <Explore /> },
  { path: '/detail/:id', element: <FontDetail /> },
  { path: '/progress', element: <FontProgress /> },
  { path: '/my-font', element: <MyFont /> },
  { path: '/bookmark', element: <Bookmark /> },
  { path: '/my-font/custom-font', element: <MyCustomFont /> },
]
