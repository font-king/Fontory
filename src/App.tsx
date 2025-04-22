import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from './components/Loading'
import { SideNavigationBar } from './components/SideNavigationBar'
import { Bounce, ToastContainer } from 'react-toastify'
import { ErrorBoundary } from 'react-error-boundary'

import 'react-toastify/dist/ReactToastify.css'
import { getCssVar } from './utils/getCssVar'

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

      <div className={`flex-column min-h-dvh bg-[${getCssVar('--color-grey-200')}]`}>
        <header className="bg-white p-12">
          <h1 className="logo font-jalnan text-p2 text-blue-500">
            <Link to={`/`}>FonTory</Link>
          </h1>
        </header>

        <main className="font-moneygraphy grid flex-grow grid-cols-[1fr_4fr_1fr] gap-5 overflow-hidden p-3">
          <SideNavigationBar />

          <ErrorBoundary FallbackComponent={() => <div></div>}>
            <Suspense fallback={<Loading />}>
              <div />
            </Suspense>
          </ErrorBoundary>

          <div>3</div>
        </main>
      </div>
    </>
  )
}

export default App
