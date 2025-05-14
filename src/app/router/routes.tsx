import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { ROUTES } from './routes.constant'

const Home = lazy(() => import('@/features/home/entry/Home'))
const Signup = lazy(() => import('@/features/sign-up/entry/SignupPage'))
const CreateFont = lazy(() => import('@/features/create-font/entry/CreateFont'))
const EditFont = lazy(() => import('@/features/edit-font/entry/EditFontPage'))
const Explore = lazy(() => import('@/features/explore/entry/Explore'))
const FontDetail = lazy(() => import('@/features/detail/entry/FontDetail'))
const FontProgress = lazy(() => import('@/features/progress/entry/FontProgress'))
const MyFont = lazy(() => import('@/features/my-font/entry/MyFont'))
const Bookmark = lazy(() => import('@/features/bookmark/entry/Bookmark'))
const MyCustomFont = lazy(() => import('@/features/my-font/entry/MyCustomFont'))

export const routes: RouteObject[] = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.SIGN_UP, element: <Signup /> },
  { path: ROUTES.CREATE_FONT, element: <CreateFont /> },
  { path: ROUTES.EDIT_FONT(), element: <EditFont /> },
  { path: ROUTES.EXPLORE, element: <Explore /> },
  { path: ROUTES.DETAIL(), element: <FontDetail /> },
  { path: ROUTES.PROGRESS, element: <FontProgress /> },
  { path: ROUTES.MY_FONT, element: <MyFont /> },
  { path: ROUTES.BOOKMARK, element: <Bookmark /> },
  { path: ROUTES.MY_CUSTOM_FONT, element: <MyCustomFont /> },
]
