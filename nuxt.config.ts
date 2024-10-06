// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui", 
    "@nuxt/eslint", 
    "@nuxt/content"
  ],

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