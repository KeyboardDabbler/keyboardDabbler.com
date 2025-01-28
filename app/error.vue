<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavHeader />
    <div class="flex-1 w-full flex flex-col">
      <div class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full justify-center">
        <UError
          :ui="{ root: 'min-h-full' }"
          :redirect="route.redirectedFrom"
          :clear="{
            color: 'neutral',
            variant: 'subtle',
            size: 'xl',
            icon: 'i-lucide-arrow-left',
            class: 'rounded-full'
          }"
          :error="{
            statusCode: 404,
            statusMessage: 'Page not found',
            message: 'The page you are looking for does not exist.'
          }"
        />
      </div>
    </div>
    <NavFooter />
  </div>
</template>
