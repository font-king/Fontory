import type { PropsWithChildren } from 'react'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const queryClientRef = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: (failureCount, error) => {
            if ((error as { status?: number }).status === 404) return false
            return failureCount < 2
          },
        },
        mutations: {
          retry: false,
        },
      },
    }),
  )

  return <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>
}
