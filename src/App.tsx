import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Toast } from './app/provider/ToastContainer'
import { RouterComponent } from './app/router/RouterComponent'
import { Header } from './components/Header'
import { Loading } from './components/Loading'
import { SideNavigationBar } from './components/SideNavigationBar'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Toast />
      <div className="flex-column bg-background min-h-dvh">
        <Header />

        <main className="font-gmarket grid flex-grow grid-cols-[1fr_4fr_1fr] gap-4 overflow-hidden px-8 py-4">
          <SideNavigationBar />

          <ErrorBoundary FallbackComponent={() => <div></div>}>
            <Suspense fallback={<Loading />}>
              <RouterComponent />
            </Suspense>
          </ErrorBoundary>

          <div>3</div>
        </main>
      </div>
    </>
  )
}

export default App
