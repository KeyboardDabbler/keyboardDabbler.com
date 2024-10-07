// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxt/ui-pro",
    "@nuxt/eslint",
    "@nuxt/content",
    'nuxt-og-image',
    '@nuxt/image'
  ],

  colorMode: {
    preference: 'dark'
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss'
  ],

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
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
  },

  devtools: { enabled: true },

  typescript: {
    typeCheck: false,
    strict: false
  },

  future: {
    compatibilityVersion: 4
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})