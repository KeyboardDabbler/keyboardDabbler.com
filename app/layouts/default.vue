<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavHeader />

    <div class="flex-grow">
      <slot />
    </div>

    <NavFooter />
  </div>
</template>
