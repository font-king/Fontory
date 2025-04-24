import { Suspense } from 'react'
import { Loading } from './components/Loading'
import { SideNavigationBar } from './components/SideNavigationBar'
import { Bounce, ToastContainer } from 'react-toastify'
import { ErrorBoundary } from 'react-error-boundary'

import 'react-toastify/dist/ReactToastify.css'
import { Button } from './components/Button'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        closeButton
        autoClose={2000}
        closeOnClick
        pauseOnHover
        transition={Bounce}
      />

      <div className="flex-column bg-background min-h-dvh">
        <Header />

        <main className="font-gmarket grid flex-grow grid-cols-[1fr_4fr_1fr] gap-4 overflow-hidden px-8 py-4">
          <SideNavigationBar />

          <ErrorBoundary FallbackComponent={() => <div></div>}>
            <Suspense fallback={<Loading />}>
              <div>
                <Button size="lg" secondary>
                  ddd
                </Button>
                <Button size="lg">hi</Button>
              </div>
            </Suspense>
          </ErrorBoundary>

          <div>3</div>
        </main>
      </div>
    </>
  )
}

export default App
