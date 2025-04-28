import { BookmarkList } from '@/features/bookmark/ui/BookmarkList'
import { SearchBar } from '@/shared/ui/SearchBar'
import { SectionLayout } from '@/shared/ui/SectionLayout'

const Bookmark = () => (
  <SectionLayout>
    <div className="border-lightgrey mb-12 border-b pb-5">
      <SearchBar />
    </div>

    <BookmarkList />
  </SectionLayout>
)

export default Bookmark
