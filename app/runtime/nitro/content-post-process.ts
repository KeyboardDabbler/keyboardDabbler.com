import type { NitroAppPlugin } from 'nitropack'
// import { Breadcrumbs } from './content/breadcrumbs'
import { CodeFilename } from './content/code-file-name'
import { NuxtImage } from './content/nuxt-image'
import { ReadTime } from './content/read-time'
import { StorageMeta } from './content/storage-meta'
import { MetaNormaliser } from './content/meta-normaliser'
import { Links } from './content/links'

const mdPlugins = [
  // Breadcrumbs,
  CodeFilename,
  NuxtImage,
  ReadTime,
  StorageMeta,
  MetaNormaliser,
  Links,
]

export const ContentPostProcess: NitroAppPlugin = (nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', async (content) => {
    if (content._extension === 'md') {
      for (const plugin of mdPlugins)
        content = await plugin(content)
    }
  })
}

export default ContentPostProcess
