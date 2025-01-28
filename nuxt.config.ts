import { definePerson } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'keyboardDabbler',
      templateParams: {
        separator: '·'
      }
    }
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss'
  ],

  site: {
    url: 'https://keyboarddabbler.com/',
    logo: '/Ada_circle_portfolio_avatar_vector_golden_retriever.png',
    name: 'keyboardDabbler',
    description: 'KeyboardDabbler\'s personal website - Explore the portfolio of a refrigeration engineer turned web development hobbyist. Discover completed projects, blog posts, and more about the passion behind the code. Contact for freelancing opportunities.'
  },

  colorMode: {
    preference: 'dark'
  },

  routeRules: {
    '/docs': { redirect: '/docs/overview', prerender: false }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-09',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/docs'
      ],
      crawlLinks: true
    }
  },

  typescript: {
    typeCheck: false,
    strict: false
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './assets/icons'
    }]
  },

  image: {
    cloudinary: {
      baseURL: process.env.NUXT_IMAGE_BASE_URL,
      modifiers: {
        quality: 'auto:best',
        dpr: 'auto'
      }
    }
  },

  schemaOrg: {
    identity: definePerson({
      name: 'keyboardDabbler',
      image: '/Ada_circle_portfolio_avatar_vector_golden_retriever.png',
      description: 'KeyboardDabbler\'s personal website - Explore the portfolio of a refrigeration engineer turned web development hobbyist. Discover completed projects, blog posts, and more about the passion behind the code. Contact for freelancing opportunities.',
      url: 'keyboarddabbler.com',
      sameAs: [
        'https://github.com/KeyboardDabbler'
      ]
    })
  }
})
