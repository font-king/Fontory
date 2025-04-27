import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Toast } from './app/provider/ToastContainer'
import { RouterComponent } from './app/router/RouterComponent'
import { Header } from './components/Header'
import { Loading } from './components/Loading'
import { ProfileCard } from './components/ProfileCard'
import { ProgressCard } from './components/ProgressCard'
import { SideNavigationBar } from './components/SideNavigationBar'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Toast />
      <div className="flex-column bg-background min-h-dvh">
        <Header />

        <main className="grid flex-grow grid-cols-[4fr_15fr_5fr] gap-4 overflow-hidden px-8 py-4">
          <SideNavigationBar />

          <ErrorBoundary FallbackComponent={() => <div></div>}>
            <Suspense fallback={<Loading />}>
              <RouterComponent />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary FallbackComponent={() => <div></div>}>
            <Suspense fallback={<Loading />}>
              <div className="flex-column gap-10">
                <ProfileCard />
                <ProgressCard />
              </div>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </>
  )
}

export default App
