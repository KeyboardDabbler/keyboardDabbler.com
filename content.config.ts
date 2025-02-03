import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty()
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
    blog: defineCollection({
      type: 'data',
      source: 'blog.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        featured: z.array(
          z.object({
            title: z.string().nonempty()
          })
        ),
        posts: z.array(
          z.object({
            title: z.string().nonempty()
          })
        )
      })
    }),
    posts: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        date: z.string(),
        image: z.object({
          src: z.string().nonempty()
        }),
        badge: z.object({
          label: z.string().nonempty()
        })
      })
    })
  }
})
