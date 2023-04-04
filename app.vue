<script lang="ts" setup>
const siteMeta = useSiteMeta()
</script>

<template>
  <Html dir="ltr">
    <Head>
      <SeoKit />
      <SchemaOrgPerson
        :name="siteMeta.name"
        image="https://res.cloudinary.com/dpub6gcei/image/upload/v1675566231/keyboardDabbler/Ada_circle_portfolio_avatar_vector_golden_retriever.png"
        :same-as="siteMeta.sameAs"
      />
    </Head>
    <Body class="text-gray-800 dark:text-gray-100 antialiased">
      <Header />
      <main class="md:(max-w-8xl pb-20 px-8) sm:(pb-16) mx-auto max-w-full px-4 py-7 pb-10">
        <NuxtPage class="page-enter-active" />
      </main>
      <footer class="px-5 sm:px-7 md:px-10 text-center text-gray-400 text-sm my-5">
        <div class="flex justify-center mb-3">
          <SocialIcons />
        </div>
        <p class="my-3">Made with ❤️ by <span class="text-yellow1 font-bold">keyboardDabbler</span> | © 2023-Present</p>
      </footer>
    </Body>
  </Html>
</template>
