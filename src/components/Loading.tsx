import { getCssVar } from '@/utils/getCssVar'
import { SyncLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className={`flex-center flex h-full w-full`}>
      <SyncLoader color={getCssVar('--color-primary')} />
    </div>
  )
}
