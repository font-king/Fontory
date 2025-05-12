import { Icon } from '@/components'
import { SectionLayout } from '@/shared/ui/SectionLayout'

export const LoginCard = () => {
  return (
    <SectionLayout title="로그인">
      <div className="flex-column gap-6">
        <button className="flex-center shadow-google w-full cursor-pointer rounded-2xl">
          <Icon name={'google'} width="18.1rem" height="5.4rem" />
        </button>

        <button className="flex-center w-full cursor-pointer rounded-2xl bg-[#03C75A] py-[1.35rem]">
          <Icon name={'naver'} width={'13rem'} height={'2.7rem'} />
        </button>
      </div>
    </SectionLayout>
  )
}
