import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        title: z.string(),
        description: z.string()
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: 'docs/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional()
      })
    }),
    blogData: defineCollection({
      type: 'data',
      source: 'blog.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        posts: z.array(
          z.object({
            title: z.string(),
            path: z.string(),
            date: z.string()
          })
        )
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})
