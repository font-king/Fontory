import { SearchBar } from '@/components/SearchBar'
import { SectionLayout } from '@/components/SectionLayout'
import { CustomFontList } from '@/features/my-font/ui/CustomFontList'

export const MyCustomFont = () => {
  return (
    <SectionLayout>
      <div className="border-lightgrey mb-10 border-b pb-5">
        <SearchBar />
      </div>

      <CustomFontList />
    </SectionLayout>
  )
}
