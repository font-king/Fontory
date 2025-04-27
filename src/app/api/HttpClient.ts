import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios'

export class HttpClient {
  private readonly client: AxiosInstance

  // 임시 토큰 사용
  private accessToken: string | null = import.meta.env.VITE_PUBLIC_ETC
  // private accessToken: string | null = null
  private isRefreshing = false
  private failedQueue: Array<{
    resolve: (value?: unknown) => void
    reject: (reason?: unknown) => void
    config: InternalAxiosRequestConfig
  }> = []

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config)

    this.onRequest = this.onRequest.bind(this)
    this.onResponse = this.onResponse.bind(this)
    this.onError = this.onError.bind(this)

    this.client.interceptors.request.use(this.onRequest, this.onError)
    this.client.interceptors.response.use(this.onResponse, this.onError)
  }

  get<T>(...args: Parameters<typeof this.client.get>): Promise<T> {
    return this.client.get(...args)
  }

  post<T>(...args: Parameters<typeof this.client.post>): Promise<T> {
    return this.client.post(...args)
  }

  put<T>(...args: Parameters<typeof this.client.put>): Promise<T> {
    return this.client.put(...args)
  }

  patch<T>(...args: Parameters<typeof this.client.patch>): Promise<T> {
    return this.client.patch(...args)
  }

  delete<T>(...args: Parameters<typeof this.client.delete>): Promise<T> {
    return this.client.delete(...args)
  }

  private onRequest(config: InternalAxiosRequestConfig) {
    if (this.accessToken) config.headers.Authorization = this.accessToken
    else config.headers.Authorization = ''

    return config
  }

  private onResponse(response: AxiosResponse) {
    return response.data
  }

  private async onError(error: AxiosError) {
    const originalRequest = error.config

    if (!originalRequest) return Promise.reject(error)

    if (originalRequest._retryCount && originalRequest._retryCount >= 3) {
      console.error('최대 요청 횟수 초과')
      return Promise.reject(error)
    }

    if (isAxiosError(error) && error.response?.status === 401) {
      originalRequest._retryCount = (originalRequest._retryCount || 0) + 1
      if (this.isRefreshing) {
        return new Promise((resolve, reject) => {
          this.failedQueue.push({ resolve, reject, config: originalRequest })
        })
      }

      this.isRefreshing = true

      try {
        // 임시 토큰 사용
        this.failedQueue.forEach(({ resolve, reject, config }) => {
          config.headers.Authorization = import.meta.env.VITE_PUBLIC_PROVIDE
          this.client(config).then(resolve).catch(reject)
        })

        originalRequest.headers.Authorization = this.accessToken

        // 임시 토큰 사용 종료

        // 토큰 재발급
        // this.accessToken = `Bearer ${accessToken}`

        // this.failedQueue.forEach(({ resolve, reject, config }) => {
        //   config.headers.Authorization = this.accessToken
        //   this.client(config).then(resolve).catch(reject)
        // })

        // originalRequest.headers.Authorization = this.accessToken
        return this.client(originalRequest)
      } catch (refreshError) {
        this.failedQueue.forEach(({ reject }) => reject(refreshError))
        this.failedQueue = []
        // window.location.href = '/login'
        throw refreshError
      } finally {
        this.isRefreshing = false
        this.failedQueue = []
      }
    }

    return Promise.reject<AxiosError>(error)
  }
}
