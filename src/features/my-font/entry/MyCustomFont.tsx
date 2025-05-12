import { SearchBar, SectionLayout } from '@/components'
import { CustomFontList } from '@/features/my-font/ui/CustomFontList'

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
