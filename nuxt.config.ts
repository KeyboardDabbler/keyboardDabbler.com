// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/ui-pro',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],

  devtools: { enabled: true },

  app: {
    head: {
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
    name: 'keyboardDabbler',
    description: 'KeyboardDabbler\'s personal website - Explore the portfolio of a refrigeration engineer turned web development hobbyist. Discover completed projects, blog posts, and more about the passion behind the code. Contact for freelancing opportunities.'
  },

  colorMode: {
    preference: 'dark'
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-09',

  nitro: {
    prerender: {
      routes: [
        '/'
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

  image: {
    cloudinary: {
      baseURL: process.env.NUXT_IMAGE_BASE_URL,
      modifiers: {
        quality: 'auto:best',
        dpr: 'auto'
      }
    }
  }
})
