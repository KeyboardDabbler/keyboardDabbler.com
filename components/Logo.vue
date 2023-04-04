<script lang="ts" setup>
const siteMeta = useSiteMeta()
</script>

<template>
  <nuxt-link to="/" class="flex items-center group unstyled py-4" title="Go Home">
    <NuxtImg
      :src="siteMeta.logo"
      format="png"
      :alt="siteMeta.name"
      provider="cloudinary"
      class="rounded-full border-2 border-primary h-20 w-20 mr-3 transition-all"
    />
    <div aria-label="keyboardDabbler" class="hidden sm:block text-gray-700 dark:text-gray-200 relative transform">
      <span class="block text-yellow6 font-bold text-3xl logo">keyboardDabbler</span>
    </div>
  </nuxt-link>
</template>

<style lang="scss">
.group:hover {
  filter: drop-shadow(0 0 35px #f2fedc);
  .logo {
    background: linear-gradient(45deg, rgba(#F4CF44, 1), rgba(#77B23E, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateX(0px) translateY(18px) skewX(-10deg);
  }
}
.logo {
  transform: skewX(-10deg);
  font-weight: 400;
  transition: 0.2s;
  background: linear-gradient(90deg, rgba(#00725D, 0.3), rgba(#008954, 0.3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
