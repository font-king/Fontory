import { ROUTES } from './routes.constant'

export const ROUTE_META = {
  [ROUTES.HOME]: {
    label: '홈',
    iconName: 'home',
    section: '메뉴',
  },
  [ROUTES.EXPLORE]: {
    label: '둘러보기',
    iconName: 'light-bulb',
    section: '메뉴',
  },
  [ROUTES.CREATE_FONT]: {
    label: '폰트 제작',
    iconName: 'pencil',
    section: '작업실',
  },
  [ROUTES.MY_FONT]: {
    label: '내 폰트',
    iconName: 'user',
    section: '나만의 공간',
  },
  [ROUTES.BOOKMARK]: {
    label: '북마크',
    iconName: 'bookmark',
    section: '나만의 공간',
  },
  [ROUTES.PROGRESS]: {
    label: '제작 현황',
    iconName: 'ruler',
    section: '나만의 공간',
  },
  // [ROUTES.MY_CUSTOM_FONT]: {
  //   label: '내 커스텀 폰트',
  // },
}
