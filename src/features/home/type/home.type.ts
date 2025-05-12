import type { Font } from '@/shared/types/font'

export type DownloadType = Pick<Font, 'id' | 'name'> & { ttf: string }
