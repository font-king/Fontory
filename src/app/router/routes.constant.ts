export const ROUTES = {
  HOME: '/',
  SIGN_UP: '/sign-up',
  CREATE_FONT: '/create-font',
  EDIT_FONT: (id: string | number = ':id') => `/edit-font/${id}`,
  EXPLORE: '/explore',
  DETAIL: (id: string | number = ':id') => `/detail/${id}`,
  PROGRESS: '/progress',
  MY_FONT: '/my-font',
  BOOKMARK: '/bookmark',
  MY_CUSTOM_FONT: '/my-font/custom-font',
  NOT_FOUND: '/404',
} as const
