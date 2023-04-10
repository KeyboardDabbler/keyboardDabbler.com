<template>
  <div>
    <NuxtLink target="_blank" href="https://github.com/harlan-zw" title="Visit my Gitea" class="group">
      <i-line-md-github class="icon icon--off" alt="Gitea Logo" />
      <i-line-md:github-twotone class="icon icon--on" alt="Gitea Logo" />
    </NuxtLink>
    <NuxtLink target="_blank" href="https://discord.com/invite/5jDAMswWwX" title="Email Me" class="group">
      <i-ic:sharp-mail-outline class="icon icon--off" alt="Email Logo" />
      <i-ic:twotone-mail class="icon icon--on" alt="Email Logo" />
    </NuxtLink>
    <NuxtLink target="_blank" href="https://discord.com/invite/5jDAMswWwX" title="Visit my Twitter" class="group">
      <i-line-md:twitter class="icon icon--off" alt="Twitter Logo" />
      <i-line-md:twitter-twotone class="icon icon--on" alt="Twitter Logo" />
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply hover:text-gray-700 dark:hover:text-gray-300 p-2;
}
</style>
