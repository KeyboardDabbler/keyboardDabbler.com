<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const route = useRoute()

const items = computed(() => [{
  label: 'Blog',
  to: '/blog',
  active: route.path.startsWith('/blog')
}, {
  label: 'Docs',
  to: '/docs',
  active: route.path.startsWith('/docs/overview')
}, {
  label: 'Projects',
  to: '/projects',
  active: route.path.startsWith('/projects')
}
])
</script>

<template>
  <UHeader
    :toggle="{
      color: 'neutral',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <NavLogo />
    </template>

    <UNavigationMenu
      :items="items"
      :ui="{
        link: 'text-lg'
      }"
    />

    <template #right>
      <SocialIcons class="text-[var(--ui-text-dimmed)] hidden lg:flex space-x-1 " />
    </template>

    <template #content>
      <UContentNavigation
        :navigation="navigation"
        highlight
      />
    </template>
  </UHeader>
</template>
