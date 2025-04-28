import { Link, useLocation } from 'react-router-dom'

import BookmarkIcon from '@/assets/nav-icons/Bookmark.svg?react'
import HomeIcon from '@/assets/nav-icons/Home.svg?react'
import ExploreIcon from '@/assets/nav-icons/LightBulb.svg?react'
import CreateFontIcon from '@/assets/nav-icons/Pencil.svg?react'
import CombineFontIcon from '@/assets/nav-icons/Plus.svg?react'
import ProgressIcon from '@/assets/nav-icons/Ruler.svg?react'
import MyFontIcon from '@/assets/nav-icons/User.svg?react'
import type { NavigationItemProps } from '@/shared/types/common'
import { getCssVar } from '@/shared/utils/getCssVar'

const NAVIGATION_LIST = [
  {
    subject: '메뉴',
    items: [
      { label: '홈', Icon: HomeIcon, url: '/' },
      { label: '둘러보기', Icon: ExploreIcon, url: '/explore' },
    ],
  },
  {
    subject: '작업실',
    items: [
      { label: '폰트 제작', Icon: CreateFontIcon, url: '/create-font' },
      { label: '폰트 합성', Icon: CombineFontIcon, url: '/combine-font' },
    ],
  },
  {
    subject: '나만의 공간',
    items: [
      { label: '내 폰트', Icon: MyFontIcon, url: '/my-font' },
      { label: '북마크', Icon: BookmarkIcon, url: '/bookmark' },
      { label: '제작 현황', Icon: ProgressIcon, url: '/progress' },
    ],
  },
]

const NavigationItem = ({ label, url, Icon }: NavigationItemProps) => {
  const { pathname } = useLocation()

  const isActive = url === '/' ? pathname === url : pathname.startsWith(url)

  const iconFillStyle = isActive ? getCssVar('--color-light-text') : getCssVar('--color-grey')
  const labelStyle = isActive ? 'text-light-text' : 'text-grey'
  const activeStyle = isActive ? 'bg-primary' : ''

  return (
    <Link
      key={url}
      to={url}
      className={`flex items-center gap-8 rounded-4xl px-3 py-6 [&>svg]:shrink-0 ${activeStyle}`}
    >
      <Icon fill={iconFillStyle} />
      <p className={`p3 ${labelStyle}`}>{label}</p>
    </Link>
  )
}

export const SideNavigationBar = () => {
  return (
    <nav className="flex-column rounded-box gap-12 px-6 py-8">
      {NAVIGATION_LIST.map(({ subject, items }) => (
        <div key={subject} className="flex-column gap-8">
          <h3 className="h6 text-black">{subject}</h3>
          {items.map((item) => (
            <NavigationItem key={item.url} {...item} />
          ))}
        </div>
      ))}
    </nav>
  )
}
