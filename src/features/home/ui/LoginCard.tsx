import GoogleLogin from '@/assets/login/Google.svg?react'
import NaverLogin from '@/assets/login/Naver.svg?react'
import { SectionLayout } from '@/shared/ui/SectionLayout'

export const LoginCard = () => {
  return (
    <SectionLayout title="로그인">
      <div className="flex-column gap-6">
        <button className="flex-center shadow-google w-full cursor-pointer rounded-2xl">
          <GoogleLogin width="18.1rem" height="5.4rem" />
        </button>
        <button className="flex-center w-full cursor-pointer rounded-2xl bg-[#03C75A] py-[1.35rem]">
          <NaverLogin width="13rem" height="2.7rem" />
        </button>
      </div>
    </SectionLayout>
  )
}
