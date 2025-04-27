import { useFontDetails } from '../model/fontDetail.store'

export const FontDetailContent = () => {
  const font = useFontDetails()

  if (!font) return null

  const { example, bookmarkCount, downloadCount } = font

  return (
    <div className="flex-column gap-12">
      <div className="grid grid-cols-2">
        <div className="flex items-center gap-6">
          <p className="h4 text-primary">북마크 수</p>
          <p className="p3 text-grey">{bookmarkCount}회</p>
        </div>

        <div className="flex items-center gap-6">
          <p className="h4 text-primary">다운로드 수</p>
          <p className="p3 text-grey">{downloadCount}회</p>
        </div>
      </div>

      <div className="flex-column gap-5">
        <p className="h4 text-primary">예시 문구</p>
        <div className="rounded-box border-light-text border px-10 py-8">
          <textarea
            readOnly
            value={example}
            rows={3}
            className="p3 text-primary placeholder:text-placeholder w-full resize-none"
          />
        </div>
      </div>

      <div className="flex-column gap-5">
        <label htmlFor="preview" className="h4 text-primary">
          미리보기
        </label>
        <div className="rounded-box border-light-text border px-10 py-8">
          <textarea
            id="preview"
            className="p3 text-primary placeholder:text-placeholder w-full resize-none"
            rows={3}
            placeholder="원하는 내용을 입력해보세요."
          />
        </div>
      </div>
    </div>
  )
}
