import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {queryClient} from '@/lib/query-client.ts'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client = {queryClient}>
      <App />
      <Toaster/>
    </QueryClientProvider>
  </StrictMode>,
)
