import type { FontRanking } from '../type/myFont.type'

type Props = {
  fonts: FontRanking
}

export const BarChart = ({ fonts }: Props) => {
  const maxValue = Math.max(...fonts.flatMap((item) => [item.bookmarkCount, item.downloadCount]), 4)
  const gridValues = Array.from({ length: 4 }, (_, i) => Math.round(maxValue * (1 - i / 4)))

  return (
    <div className="flex-column h-80 grow gap-3">
      <div className="relative w-full grow">
        <div className="absolute inset-0 z-0">
          {gridValues.map((value, index) => (
            <div
              key={index}
              className="border-lightgrey relative ml-20 h-1/4 border-t border-dashed"
            >
              <span className="p6 text-grey absolute -top-[0.7rem] -left-[5rem]">{value}</span>
            </div>
          ))}
        </div>

        <div className="border-lightgrey relative z-10 ml-12 flex h-full items-end justify-around border-b">
          {fonts.map(({ name, bookmarkCount, downloadCount }) => (
            <div key={name} className="flex h-full items-end justify-center gap-3">
              <div
                className={`hover: bg-primary relative w-12 cursor-pointer transition-all`}
                style={{ height: `${(bookmarkCount / maxValue) * 100}%` }}
                data-value={`북마크: ${bookmarkCount}`}
              />
              <div
                className={`stat-bar bg-secondary relative w-12 cursor-pointer transition-all`}
                style={{ height: `${(downloadCount / maxValue) * 100}%` }}
                data-value={`다운로드: ${downloadCount}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="ml-12 flex items-center justify-around">
        {fonts.map((item) => (
          <span key={item.name} className="text-grey p5 text-center">
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}
