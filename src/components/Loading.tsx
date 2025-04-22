import { SyncLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className={`flex h-full w-full flex-row items-center justify-center`}>
      <SyncLoader color="#6db0f4" />
    </div>
  )
}
