import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Header, Loading, SideNavigationBar, SideProfile } from '@/components'

import { ToastProvider } from './app/providers'
import { AppRouter } from './app/router'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastProvider />
      <div className="flex-column bg-background min-h-dvh">
        <Header />

        <main className="grid flex-grow grid-cols-[4fr_15fr_5fr] gap-4 overflow-hidden px-8 py-4">
          <SideNavigationBar />

          <ErrorBoundary FallbackComponent={() => <div></div>}>
            <Suspense fallback={<Loading />}>
              <AppRouter />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary FallbackComponent={() => <div></div>}>
            <Suspense fallback={null}>
              <SideProfile />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </>
  )
}

export default App
