import { ProfileImage } from '@/components/ProfileImage'
import { SectionLayout } from '@/components/SectionLayout'

export const ProfileCard = () => {
  const fontName = '고로케'
  const count = 32

  return (
    <SectionLayout>
      <div className="flex-between-center px-4">
        <ProfileImage size="md" />
        <div className="flex-column items-center gap-3">
          <p className="p3 text-primary">{fontName} 님</p>
          <p className="p5 text-grey">제작 폰트 수: {count} 개</p>
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-7 px-4">
        <button className="p5 text-grey">정보 수정</button>
        <button className="p5 text-warn">로그아웃</button>
      </div>
    </SectionLayout>
  )
}
