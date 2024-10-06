// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    "@nuxt/ui", 
    "@nuxt/eslint"
  ],

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: false
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