<template>
  <div>
    <NuxtLink
      target="_blank"
      href="https://github.com/KeyboardDabbler"
      title="Visit my Gitub"
      class="group hover:text-gray-500 dark:hover:text-gray-100 p-2"
    >
      <UIcon
        name="i-line-md-github"
        class="md:size-8 size-6 icon inline-block group-hover:hidden"
        alt="Gitea Logo"
      />
      <UIcon
        name="i-line-md:github-twotone"
        class="md:size-8 size-6 icon hidden group-hover:inline-block"
        alt="Gitea Logo"
      />
    </NuxtLink>

    <NuxtLink
      target="_blank"
      href="mailto:keyboarddabbler@gmail.com"
      title="Email Me"
      class="group hover:text-gray-500 dark:hover:text-gray-100 p-2"
    >
      <UIcon
        name="i-ic:sharp-mail-outline"
        class="md:size-8 size-6 icon inline-block group-hover:hidden"
        alt="Email Logo"
      />
      <UIcon
        name="i-ic:twotone-mail"
        class="md:size-8 size-6 icon hidden group-hover:inline-block"
        alt="Email Logo"
      />
    </NuxtLink>
  </div>
</template>
