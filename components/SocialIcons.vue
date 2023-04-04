<template>
  <div>
    <NuxtLink target="_blank" href="https://gitea.keyboarddabbler.com" title="Visit my Gitea" class="group" alt="Github Logo">
      <Icon name="line-md-github" class="icon icon--off" />
      <Icon name="line-md-github-loop" class="icon icon--on" />
    </NuxtLink>
    <NuxtLink target="_blank" href="" title="Email Me" class="group" alt="Email Logo">
      <Icon name="ic:sharp-mail-outline" class="icon icon--off" />
      <Icon name="ic:twotone-mail" class="icon icon--on" />
    </NuxtLink>
    <NuxtLink target="_blank" href="https://twitter.com/keyboardDabbler" title="Visit my Twitter" class="group" alt="Twitter Logo">
      <Icon name="line-md:twitter" class="icon icon--off" />
      <Icon name="line-md:twitter-twotone" class="icon icon--on" />
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply hover: text-gray-700 dark:hover:text-gray-300 p-2;
}
</style>
