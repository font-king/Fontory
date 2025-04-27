export const ChartLegend = () => (
  <div className="flex-column shrink gap-8">
    <div className="flex items-center gap-3">
      <div className="bg-primary h-8 w-8" />
      <span className="p5 text-grey">북마크 수</span>
    </div>

    <div className="flex items-center gap-3">
      <div className="bg-secondary h-8 w-8" />
      <span className="p5 text-grey">다운로드 수</span>
    </div>
  </div>
)
