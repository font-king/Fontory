import { SectionLayout } from '@/components/SectionLayout'
import { FontRankingChart } from '@/features/my-font/ui/FontRakingChart'
import { FontRankingList } from '@/features/my-font/ui/FontRankingList'
import { useFetchMyFontRanking } from '@/queries/useFont.queries'

export const MyFont = () => {
  const { data: fonts } = useFetchMyFontRanking()

  return (
    <div className="flex-column gap-6">
      <SectionLayout
        title="나만의 폰트 랭킹"
        subTitle="북마크 수와 다운로드 수가 가장 많은 상위 5개 폰트"
      >
        <FontRankingChart fonts={fonts} />
      </SectionLayout>

      <SectionLayout title="내가 제작한 폰트" moreViewTo="/my-font/custom-font">
        <FontRankingList fonts={fonts} />
      </SectionLayout>
    </div>
  )
}
