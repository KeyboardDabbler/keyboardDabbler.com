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
        'nuxt-og-image', ,
        'nuxt-icon'
    ],
    css: [
        '@/resources/scrollbars.css',
        '@/resources/main.scss',
    ],
    pinceau: {
        configFileName: 'tokens.config',
        debug: false,
    },
    content: {
        documentDriven: true,
        highlight: {
          // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
          theme: 'dracula',
        },
      },

})
