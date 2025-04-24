import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css'
import App from './App.tsx'
import { CustomQueryClientProvider } from '@/app/provider/CustomQueryClientProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <CustomQueryClientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CustomQueryClientProvider>,
)
