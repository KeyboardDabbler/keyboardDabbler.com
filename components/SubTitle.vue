<template>
  <h2 class="mb-5 inline-block font-semibold text-lg">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
h2 {
  background-image: linear-gradient(90deg, #B5C239, #F4CF44);
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
}
</style>
