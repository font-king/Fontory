import { Link, useLocation } from 'react-router-dom'
import {
  NavBookmarkIcon,
  NavExploreIcon,
  NavFontDesignIcon,
  NavFontSynthesisIcon,
  NavHomeIcon,
  NavMyFontIcon,
} from './icons/NavIcons'
import { getCssVar } from '@/utils/getCssVar'

const NAV_LIST = [
  { label: '홈', Icon: NavHomeIcon, url: '/' },
  { label: '둘러보기', Icon: NavExploreIcon, url: '/explore' },
  { label: '폰트 제작', Icon: NavFontDesignIcon, url: '/font-design' },
  { label: '폰트 합성', Icon: NavFontSynthesisIcon, url: '/font-synthesis' },
  { label: '북마크', Icon: NavBookmarkIcon, url: '/bookmark' },
  { label: '내 폰트', Icon: NavMyFontIcon, url: '/my-font' },
]

export const SideNavigationBar = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex-column justify-center gap-12 rounded-4xl bg-blue-500 px-[2rem] py-[6rem] shadow-md">
      {NAV_LIST.map(({ url, label, Icon }) => {
        const isActive = url === '/' ? pathname === url : pathname.startsWith(url)

        return (
          <Link
            key={url}
            to={url}
            className={`flex items-center gap-8 rounded-4xl px-3 py-6 [&>svg]:shrink-0 ${isActive ? 'bg-white' : getCssVar('--color-blue-500')}`}
          >
            <Icon isActive={isActive} />
            <p className={`text-p5 ${isActive ? `text-blue-500` : 'text-white'} `}>{label}</p>
          </Link>
        )
      })}
    </div>
  )
}
