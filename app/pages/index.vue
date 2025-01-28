<script setup lang="ts">
const home = await queryCollection('home').path('/').first()
if (!home.body) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UContainer>
    <UPage>
      <ContentRenderer :value="home" />
    </UPage>
  </UContainer>
</template>
