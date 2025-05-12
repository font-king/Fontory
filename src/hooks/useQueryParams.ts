import { useLocation } from 'react-router-dom'

export const useQueryParams = <T extends Record<string, string>>(defaultValues: T) => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const parsed = Object.keys(defaultValues).reduce((acc, key) => {
    const value = params.get(key) || defaultValues[key]
    return { ...acc, [key]: value }
  }, {} as T)

  return parsed
}
