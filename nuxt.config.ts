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
    runtimeConfig: {
        public: {
            titleSeparator: '·',
            siteUrl: 'https://keyboarddabbler.com/',
            siteName: 'keyboardDabbler',
            siteDescription: 'KeyboardDabbler\'s personal website - Explore the portfolio of a refrigeration engineer turned web development hobbyist. Discover completed projects, blog posts, and more about the passion behind the code. Contact for freelancing opportunities.',
            language: 'en-NZ',
        },
    },
    app: {
        head: {
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'preconnect', href: 'https://res.cloudinary.com' },
            ],
            meta: [
                { 'http-equiv': 'accept-ch', 'content': 'DPR' },
            ],
        },
    },
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
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/dpub6gcei/image/upload/v1675566231/keyboardDabbler',
          modifiers: {
            quality: 'auto:best',
            dpr: 'auto',
          },
        },
      },

})
