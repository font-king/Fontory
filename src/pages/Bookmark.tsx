import { SearchBar, SectionLayout } from '@/components'
import { BookmarkList } from '@/features/bookmark/ui/BookmarkList'

const Bookmark = () => (
  <SectionLayout>
    <div className="border-lightgrey mb-12 border-b pb-5">
      <SearchBar />
    </div>

    <BookmarkList />
  </SectionLayout>
)

export default Bookmark
