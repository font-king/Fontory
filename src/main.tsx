import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryProvider } from '@/app/providers'

import App from './App.tsx'

import '@/app/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryProvider>,
)
