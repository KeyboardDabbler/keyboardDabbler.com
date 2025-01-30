<script setup lang="ts">

</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <template #top>
            <UContentSearchButton
              class="rounded-md w-full"
              variant="subtle"
              label="Search..."
              size="sm"
            />
          </template>

        </UPageAside>
      </template>
      <NuxtPage />
    </UPage>
  </UContainer>
</template>
