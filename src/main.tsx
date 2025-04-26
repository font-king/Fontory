import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CustomQueryClientProvider } from '@/app/provider/CustomQueryClientProvider.tsx'

import App from './App.tsx'

import '@/app/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <CustomQueryClientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CustomQueryClientProvider>,
)
