export const PROGRESS_STATUS = {
  progress: 'PROGRESS',
  done: 'DONE',
} as const

export type ProgressStatus = (typeof PROGRESS_STATUS)[keyof typeof PROGRESS_STATUS]
