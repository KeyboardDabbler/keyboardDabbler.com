<template>
  <div class="md:max-w-8xl md:pb-20 md:px-8 sm:pb-16 mx-auto max-w-full px-4 py-7 pb-10 max-w-100ch">
    <div class="prose prose-gray dark:prose-invert mb-8 md:mb-12">
      <div class="lg:grid lg:grid-cols-12 lg:gap-20 relative">
        <div class="col-span-7">
          <slot name="left" />
        </div>
        <div class="col-span-5 text-center">
          <div class="sticky top-35">
            <slot name="right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
