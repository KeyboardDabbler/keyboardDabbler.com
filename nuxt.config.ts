// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxt/ui-pro",
    "@nuxt/eslint",
    "@nuxt/content",
    'nuxt-og-image'
  ],

  colorMode: {
    preference: 'dark'
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
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