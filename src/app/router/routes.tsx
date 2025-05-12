import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/features/home/entry/Home'))
const CreateFont = lazy(() => import('@/features/create-font/entry/CreateFont'))
const Explore = lazy(() => import('@/features/explore/entry/Explore'))
const FontDetail = lazy(() => import('@/features/detail/entry/FontDetail'))
const FontProgress = lazy(() => import('@/features/progress/entry/FontProgress'))
const MyFont = lazy(() => import('@/features/my-font/entry/MyFont'))
const Bookmark = lazy(() => import('@/features/bookmark/entry/Bookmark'))
const MyCustomFont = lazy(() => import('@/features/my-font/entry/MyCustomFont'))

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
