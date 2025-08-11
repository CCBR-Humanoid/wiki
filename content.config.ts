import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md']
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    }),



    blog: defineCollection({
      source: 'blog.yml',
      type: 'page'
    }),
    posts: defineCollection({
      source: 'blog/**/*',
      type: 'page',
      schema: z.object({
        // image: z.object({ src: z.string().nonempty().editor({ input: 'media' }) }),
        authors: z.array(
          z.object({
            name: z.string().nonempty(),
            to: z.string().nonempty(),
            // avatar: z.object({ src: z.string().nonempty().editor({ input: 'media' }) })
          })
        ),
        date: z.date(),
        badge: z.object({ label: z.string().nonempty() })
      })
    }),
  }
})

export const collections = {
  
}
