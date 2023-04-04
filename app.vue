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
    <Body>

    </Body>
  </Html>
</template>
