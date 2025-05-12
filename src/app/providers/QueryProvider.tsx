import type { PropsWithChildren } from 'react'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}
