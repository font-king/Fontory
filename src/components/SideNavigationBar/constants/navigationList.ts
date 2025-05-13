export const NAVIGATION_LIST = [
  {
    subject: '메뉴',
    items: [
      { label: '홈', iconName: 'home', url: '/' },
      { label: '둘러보기', iconName: 'light-bulb', url: '/explore' },
    ],
  },
  {
    subject: '작업실',
    items: [{ label: '폰트 제작', iconName: 'pencil', url: '/create-font' }],
  },
  {
    subject: '나만의 공간',
    items: [
      { label: '내 폰트', iconName: 'user', url: '/my-font' },
      { label: '북마크', iconName: 'bookmark', url: '/bookmark' },
      { label: '제작 현황', iconName: 'ruler', url: '/progress' },
    ],
  },
] as const
