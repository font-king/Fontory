import { Link, useLocation } from 'react-router-dom'

import { ROUTE_META } from '@/app/router/routeMeta.constant'
import { Icon } from '@/components'
import type { IconName } from '@/components/Icon/iconMap'
import { getCssVar } from '@/utils'

type NavigationItemType = {
  label: string
  url: string
  iconName: IconName
}

const NavigationItem = ({ label, url, iconName }: NavigationItemType) => {
  const { pathname } = useLocation()
  const isActive = url === '/' ? pathname === url : pathname.startsWith(url)

  const iconFillStyle = isActive ? getCssVar('--color-light-text') : getCssVar('--color-grey')
  const labelStyle = isActive ? 'text-light-text' : 'text-grey'
  const activeStyle = isActive ? 'bg-primary' : ''

  return (
    <Link
      to={url}
      className={`flex items-center gap-8 rounded-4xl px-3 py-6 [&>svg]:shrink-0 ${activeStyle}`}
    >
      <Icon name={iconName} fill={iconFillStyle} />
      <p className={`p3 ${labelStyle}`}>{label}</p>
    </Link>
  )
}

export const SideNavigationBar = () => {
  const sections: Record<string, { label: string; url: string; iconName: IconName }[]> = {}

  Object.entries(ROUTE_META).forEach(([url, { label, section, iconName }]) => {
    if (!section || !iconName) return
    if (!sections[section]) sections[section] = []
    sections[section].push({ label, url, iconName } as NavigationItemType)
  })

  return (
    <nav className="flex-column rounded-box gap-12 px-6 py-8">
      {Object.entries(sections).map(([subject, items]) => (
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
