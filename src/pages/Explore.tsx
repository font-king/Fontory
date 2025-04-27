import { SearchBar } from '@/components/SearchBar'
import { SectionLayout } from '@/components/SectionLayout'
import { ExploreFontList } from '@/features/explore/ui/ExploreFontList'
import { FilterList } from '@/features/explore/ui/FilterList'

export const Explore = () => {
  return (
    <SectionLayout>
      <section className="border-lightgrey mb-12 grid grid-cols-2 items-center overflow-x-hidden border-b pb-5">
        <FilterList />
        <SearchBar />
      </section>

      <ExploreFontList />
    </SectionLayout>
  )
}
