// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        '@nuxt-themes/docus',
        'nuxt-seo-kit'
    ],
    modules: [
        '@vueuse/nuxt',
        'nuxt-windicss',
        '@nuxt/content',
        '@nuxt/image-edge',
        'nuxt-og-image',,
        'nuxt-icon'
    ],
    css: [
        '@/resources/scrollbars.css',
        '@/resources/main.scss',
      ],
    
})
