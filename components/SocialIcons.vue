<template>
  <div>
    <NuxtLink target="_blank" href="https://gitea.keyboarddabbler.com/explore/repos" title="Visit my Gitea" class="group">
      <i-line-md-github class="icon icon--off" alt="Gitea Logo" />
      <i-line-md:github-twotone class="icon icon--on" alt="Gitea Logo" />
    </NuxtLink>
    <NuxtLink target="_blank" href="mailto:keyboarddabbler@gmail.com" title="Email Me" class="group">
      <i-ic:sharp-mail-outline class="icon icon--off" alt="Email Logo" />
      <i-ic:twotone-mail class="icon icon--on" alt="Email Logo" />
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply hover:text-gray-700 dark:hover:text-gray-300 p-2;
}
</style>
