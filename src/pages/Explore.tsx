import { SearchBar, SectionLayout } from '@/components'
import { ExploreFilterList } from '@/features/explore/ui/ExploreFilterList'
import { ExploreFontList } from '@/features/explore/ui/ExploreFontList'

const Explore = () => {
  return (
    <SectionLayout>
      <section className="border-lightgrey mb-12 grid grid-cols-2 items-center overflow-x-hidden border-b pb-5">
        <ExploreFilterList />
        <SearchBar />
      </section>

      <ExploreFontList />
    </SectionLayout>
  )
}

export default Explore
