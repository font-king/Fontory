import { SearchBar } from '@/components/SearchBar'
import { SectionLayout } from '@/components/SectionLayout'
import { BookmarkFontList } from '@/features/bookmark/ui/BookmarkFontList'

export const Bookmark = () => (
  <SectionLayout>
    <div className="border-lightgrey mb-12 border-b pb-5">
      <SearchBar />
    </div>

    <BookmarkFontList />
  </SectionLayout>
)
