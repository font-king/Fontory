import { SectionLayout } from '@/components/SectionLayout'
import { PopularFontList } from '@/features/home/ui/PopularFontList'

export const Home = () => {
  return (
    <div>
      <SectionLayout title="인기 폰트">
        <PopularFontList />
      </SectionLayout>
    </div>
  )
}
