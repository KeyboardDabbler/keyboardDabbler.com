<script setup lang="ts">
const page = await queryCollection('showcaseData').first()

const isYearly = ref('0')

const items = ref([
  {
    label: 'Web Apps',
    icon: 'carbon:application-web',
    value: '0'
  },
  {
    label: 'GFX',
    icon: 'material-symbols-light:design-services-outline-rounded',
    value: '1'
  }
])
</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero">
      <template #links>
        <UTabs
          v-model="isYearly"
          :items="items"
          color="primary"
          class="w-72"
          :ui="{ list: 'rounded-full', indicator: 'rounded-full' }"
        />
      </template>
    </UPageHero>
  </div>
</template>
