<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

provide('navigation', navigation)
</script>

<template>
  <div class="flex flex-col min-h-screen">
      <NavHeader />
      <div class="flex-1 w-full flex flex-col">
          <div class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full justify-center">
            <UError :ui="{ root: 'min-h-full' }" :error="error" />
          </div>
      </div>
      <NavFooter />
      <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </div>
</template>
