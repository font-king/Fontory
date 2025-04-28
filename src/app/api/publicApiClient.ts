import axios from 'axios'

const BASE_URL = import.meta.env.VITE_PUBLIC_SERVER_DOMAIN

export const publicApiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

publicApiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
)
