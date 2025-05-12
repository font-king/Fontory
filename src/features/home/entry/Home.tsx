import { PopularList } from '@/features/home/ui/PopularList'
import { SectionLayout } from '@/shared/ui/SectionLayout'

const Home = () => {
  return (
    <div>
      <SectionLayout title="인기 폰트">
        <PopularList />
      </SectionLayout>
    </div>
  )
}

export default Home
