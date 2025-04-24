import { FontCardWithProfile } from '@/components/FontCardWithProfile'
import { useFetchPopularFontList } from '@/queries/useFont.queries'

export const PopularFontList = () => {
  const { data: fontList } = useFetchPopularFontList()

  return (
    <div className="grid grid-cols-3 gap-5">
      {fontList.slice(0, 3).map((font) => (
        <FontCardWithProfile key={font.id} font={font} />
      ))}
    </div>
  )
}
