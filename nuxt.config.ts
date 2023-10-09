// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus', 'nuxt-seo-kit'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    'nuxt-windicss',
    '~/app/module',
    '~/modules/unplugin-icons',
    '@nuxt/content',
  ],
  build: {
    transpile: ['swiper']
  },

  runtimeConfig: {
    public: {
      titleSeparator: '·',
      siteUrl: 'https://keyboarddabbler.com/',
      siteName: 'keyboardDabbler',
      siteDescription: 'KeyboardDabbler\'s personal website - Explore the portfolio of a refrigeration engineer turned web development hobbyist. Discover completed projects, blog posts, and more about the passion behind the code. Contact for freelancing opportunities.',
      language: 'en-NZ',
    },
  },

  css: [
    '@/resources/scrollbars.css',
    '@/resources/main.scss',
  ],

  devtools: true,

  pinceau: {
    configFileName: 'tokens.config',
    studio: false,
    debug: true,
    followSymbolicLinks: false,
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
  // https://content.nuxtjs.org
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

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/feed.xml',
        '/feed.json',
        '/feed.atom',
      ],
    },
  },
})