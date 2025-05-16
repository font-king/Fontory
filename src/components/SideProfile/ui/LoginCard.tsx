import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useUserActions } from '@/app/stores'
import { Icon, SectionLayout } from '@/components'

import { useAuthInfo } from '../apis/sideProfile.query'

export const LoginCard = () => {
  const { data: user } = useAuthInfo()
  const { login } = useUserActions()

  useEffect(() => {
    if (user) login(user)
  }, [login, user])

  if (user) return null

  return (
    <SectionLayout title="로그인">
      <div className="flex-column gap-6">
        <Link
          to={`${import.meta.env.VITE_PUBLIC_SERVER_DOMAIN}/oauth2/authorization/google`}
          className="flex-center shadow-google w-full cursor-pointer rounded-2xl"
        >
          <Icon name={'google'} width="18.1rem" height="5.4rem" />
        </Link>

        <Link
          to={`${import.meta.env.VITE_PUBLIC_SERVER_DOMAIN}/oauth2/authorization/naver`}
          className="flex-center w-full cursor-pointer rounded-2xl bg-[#03C75A] py-[1.35rem]"
        >
          <Icon name={'naver'} width={'13rem'} height={'2.7rem'} />
        </Link>
      </div>
    </SectionLayout>
  )
}
