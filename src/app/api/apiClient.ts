import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'

import { clearAccessToken, getAccessToken, refreshAccessToken } from './tokenManager'

const BASE_URL = import.meta.env.VITE_PUBLIC_SERVER_DOMAIN

const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken()
    config.headers.Authorization = token ? token : ''

    return config
  },
  (error) => Promise.reject(error),
)

client.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const newToken = await refreshAccessToken()
        originalRequest.headers.Authorization = newToken

        return client(originalRequest)
      } catch (refreshError) {
        clearAccessToken()
        // 로그인으로 이동

        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

const get = <T = unknown>(url: string, config?: AxiosRequestConfig) => {
  return client.get<T, T>(url, config)
}

const post = <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return client.post<T, T>(url, data, config)
}

const put = <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return client.put<T, T>(url, data, config)
}

const patch = <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return client.patch<T, T>(url, data, config)
}

const _delete = <T = unknown>(url: string, config?: AxiosRequestConfig) => {
  return client.delete<T, T>(url, config)
}

export const apiClient = {
  get,
  post,
  put,
  patch,
  delete: _delete,
}
