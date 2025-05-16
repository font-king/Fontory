import { useUserState } from '@/app/stores'

import { LoginCard } from './LoginCard'
import { ProfileCard } from './ProfileCard'
import { ProgressCard } from './ProgressCard'

export const SideProfile = () => {
  const user = useUserState()

  if (!user) return <LoginCard />

  return (
    <div className="flex-column gap-10">
      <ProfileCard />
      <ProgressCard />
    </div>
  )
}
