import { CustomFontList } from '@/features/my-font/ui/CustomFontList'
import { SearchBar } from '@/shared/ui/SearchBar'
import { SectionLayout } from '@/shared/ui/SectionLayout'

const MyCustomFont = () => {
  return (
    <SectionLayout>
      <div className="border-lightgrey mb-10 border-b pb-5">
        <SearchBar />
      </div>

      <CustomFontList />
    </SectionLayout>
  )
}

export default MyCustomFont
