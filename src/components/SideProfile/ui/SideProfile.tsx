import { LoginCard } from './LoginCard'
import { ProfileCard } from './ProfileCard'
import { ProgressCard } from './ProgressCard'

export const SideProfile = () => {
  // 로그인 여부에 따른 렌더링
  // const isLoggedIn =

  const isLoggedIn = false

  if (isLoggedIn) return <LoginCard />

  return (
    <div className="flex-column gap-10">
      <ProfileCard />
      <ProgressCard />
    </div>
  )
}
