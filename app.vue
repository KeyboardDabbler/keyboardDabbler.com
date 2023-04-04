<script lang="ts" setup>
const siteMeta = useSiteMeta()
</script>

<template>
  <Html dir="ltr">
    <Head>
      <SeoKit />
      <SchemaOrgPerson
        :name="siteMeta.name"
        :same-as="siteMeta.sameAs"
      />
    </Head>
    <Body>

    </Body>
  </Html>
</template>
