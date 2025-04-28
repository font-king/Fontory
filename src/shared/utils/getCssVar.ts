export const getCssVar = (name: string, fallback = '') => {
  if (typeof window === 'undefined') return fallback

  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return value || fallback
}
