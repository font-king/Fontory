import { useUserState } from '@/app/stores'
import { ProfileImage, SectionLayout } from '@/components'
import { useCustomList } from '@/features/my-font/api/myFont.query'

export const ProfileCard = () => {
  const user = useUserState()
  const { data: myFontData } = useCustomList('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const totalFonts = (myFontData.pages[0] as any).totalElements

  if (!user) return

  return (
    <SectionLayout>
      <div className="flex-between-center px-4">
        <ProfileImage size="md" src={user.profileImageUrl} />
        <div className="flex-column items-center gap-3">
          <p className="p3 text-primary">{user.nickname} 님</p>
          <p className="p5 text-grey">제작 폰트 수: {totalFonts} 개</p>
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-7 px-4">
        <button className="p5 text-grey">정보 수정</button>
        <button className="p5 text-warn">로그아웃</button>
      </div>
    </SectionLayout>
  )
}
