import { SectionLayout } from '@/components'
import { PROGRESS_STATUS } from '@/config'

import { useFontProgress } from '../apis/sideProfile.query'

export const ProgressCard = () => {
  const { data } = useFontProgress()

  if (!data) return null

  const progressList = data.slice(0, 5)

  return (
    <SectionLayout title="제작 현황" moreViewTo="/progress">
      <div className="flex-column gap-4">
        {progressList.map(({ id, name, status }) => {
          const isProgress = status === PROGRESS_STATUS.progress
          const textStyle = isProgress ? 'text-secondary' : 'text-warn'
          const progressLabel = isProgress ? '제작 중' : '제작 완료'

          return (
            <div key={id} className="flex-between-center gap-2 overflow-hidden">
              <span className="p5 text-grey overflow-hidden text-ellipsis whitespace-nowrap">
                {name}
              </span>
              <span className={`h7 shrink-0 ${textStyle}`}>{progressLabel}</span>
            </div>
          )
        })}
      </div>
    </SectionLayout>
  )
}
