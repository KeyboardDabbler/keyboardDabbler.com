<template>
  <UFooter class="my-10 text-[var(--ui-text-dimmed)] text-sm">
    <template #top>
      <SocialIcons class="flex items-center justify-center" />
    </template>

    <template #default>
      <UFormField
        name="email"
        label="Subscribe to our newsletter"
        size="sm"
        :ui="{
          labelWrapper: 'justify-center'
        }"
      >
        <UInput
          type="email"
          class="w-80"
          color="neutral"
          variant="soft"
          placeholder="Enter email address..."
        >
          <template #trailing>
            <UButton
              type="submit"
              size="xs"
              color="neutral"
              variant="subtle"
              label="Subscribe"
            />
          </template>
        </UInput>
      </UFormField>
    </template>

    <template #bottom>
      <p class="flex items-center justify-center">
        Made by
        <ULink
          raw
          to="https://github.com/KeyboardDabbler"
          active-class="font-bold"
          inactive-class="bg-gradient-to-r from-[var(--color-yellow-1)] to-[var(--color-lime-400)] bg-clip-text text-transparent"
          class="mx-2"
        >
          keyboardDabbler
        </ULink>
        | © {{ new Date().getFullYear() }}
      </p>
    </template>
  </UFooter>
</template>
