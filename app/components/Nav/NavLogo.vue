<script lang="ts" setup>
const siteMeta = useSiteMeta()
</script>

<template>
  <NuxtLink
    to="/"
    class="flex items-center group unstyled py-4"
    title="Go Home"
  >
    <NuxtImg
      :src="siteMeta.logo"
      format="png"
      :alt="siteMeta.name"
      provider="cloudinary"
      class="no-spacing mr-3 rounded-full border-1 border-primary transition-all unstyled"
    />
    <span class="block font-normal text-1xl sm:text-3xl logo bg-gradient-to-r from-[var(--color-yellow-1)] to-[var(--ui-primary)] bg-clip-text text-transparent">keyboardDabbler</span>
  </NuxtLink>
</template>

<style scoped>
.group:hover {
  filter: drop-shadow(0 0 25px #f2fedc);
}

.no-spacing {
    width: 4em;
    height: 4em;
}
</style>
