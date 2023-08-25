import type { ParsedContent as DefaultParsedContent } from '@nuxt/content/dist/runtime/types'
import type { StorageMeta } from 'unstorage'

export interface ParsedContent extends DefaultParsedContent {
  storageMeta: StorageMeta
  prose?: boolean
  schemaOrg: Record<string, any>
}

export interface Post extends ParsedContent {
  readingMins: number
  description: string
  publishedAt: Date
  modifiedAt: Date
  path: string
  renderer: 'post' | 'page'
  icon?: string
  nav?: boolean
}
export interface Page extends Post {
}

export interface JsonParsedContent<T> extends ParsedContent {
  body: T
}

export interface projectData {
  title: string
  description: string
  url: string
  repo: string
  img: string
  tag: string
}
