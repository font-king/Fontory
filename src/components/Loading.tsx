import { SyncLoader } from 'react-spinners'

import { getCssVar } from '@/utils'

export const Loading = () => {
  return (
    <div className={`flex-center flex h-full w-full`}>
      <SyncLoader color={getCssVar('--color-primary')} />
    </div>
  )
}
