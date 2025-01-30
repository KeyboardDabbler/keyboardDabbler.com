<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '#ui-pro/utils'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

console.log('Navigation:', navigation)

const links = computed(() => mapContentNavigation(navigation?.value ?? []))
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <template #top>
            <UContentSearchButton
              class="rounded-md w-full"
              variant="subtle"
              label="Search..."
              size="sm"
            />
          </template>

          <UContentNavigation
            :navigation="links"
            highlight
          />
        </UPageAside>
      </template>
      <NuxtPage />
    </UPage>
  </UContainer>
</template>
