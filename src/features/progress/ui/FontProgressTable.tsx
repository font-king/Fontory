import { useFontProgress } from '@/features/home/api/home.query'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'

const TABLE_HEADERS = ['폰트 이름', '제작 일자', '제작 상황']

export const FontProgressTable = () => {
  const { data: progressList } = useFontProgress()

  if (!progressList) throw new Error('폰트 제작 현황을 불러오지 못했습니다.')
  if (!progressList.length) return <EmptyMessage message="제작한 폰트가 없습니다." />

  return (
    <table className="w-full border-collapse text-center">
      <thead>
        <tr className="table-header">
          {TABLE_HEADERS.map((header) => (
            <th key={header} className="table-cell">
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {progressList.map(({ id, name, createdAt, status }) => {
          const isProgress = status === 'PROGRESS'
          const statusStyle = isProgress ? 'text-secondary' : 'text-warn'
          const progressLabel = isProgress ? '제작 중' : '제작 완료'

          return (
            <tr key={id} className="striped-row text-primary">
              <td className="table-cell">{name}</td>
              <td className="table-cell">{createdAt}</td>
              <td className={`table-cell font-bold ${statusStyle}`}>{progressLabel}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
