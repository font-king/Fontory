import 'axios'

declare module 'axios' {
  interface InternalAxiosRequestConfig {
    _retryCount?: number
  }
}
