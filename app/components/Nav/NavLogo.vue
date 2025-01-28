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
    <div
      aria-label="keyboardDabbler"
      class="block text-gray-700 dark:text-gray-200 relative transform"
    >
      <span class="block text-yellow6 font-bold text-1xl sm:text-3xl logo">keyboardDabbler</span>
    </div>
  </NuxtLink>
</template>

<style lang="css">
.group:hover {
  filter: drop-shadow(0 0 25px #f2fedc);
}

.group:hover .logo {
  background: linear-gradient(45deg, #F4CF44, #77B23E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateX(0px) translateY(9px) skewX(-10deg);
}

.logo {
  transform: skewX(-10deg);
  font-weight: 400;
  transition: 0.2s;
  background: linear-gradient(90deg, #00725D 30%, #008954 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.no-spacing {
    width: 4em;
    height: 4em;
}
</style>
