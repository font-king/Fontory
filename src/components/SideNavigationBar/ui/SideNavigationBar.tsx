import { Link, useLocation } from 'react-router-dom'

import { Icon } from '@/components'
import type { IconName } from '@/components/Icon/iconMap'
import { getCssVar } from '@/utils'

import { NAVIGATION_LIST } from '../constants/navigationList'

type Props = {
  label: string
  url: string
  iconName: IconName
}

const NavigationItem = ({ label, url, iconName }: Props) => {
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
      <Icon name={iconName} fill={iconFillStyle} />
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
