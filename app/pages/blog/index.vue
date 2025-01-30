<script setup lang="ts">
const blogData = await queryCollection('blogData').first()

const { data: posts } = await useAsyncData('blog', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .select('title', 'path', 'description')
    .all()
})
</script>

<template>
  <UPage>
    <UPageHeader
      v-bind="blogData"
      class="py-[50px]"
    />

    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            :to="post.path"
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
            :authors="post.authors"
            :badge="post.badge"
            :orientation="index === 0 ? 'horizontal' : 'vertical'"
            :class="[index === 0 && 'col-span-full']"
            :ui="{
              description: 'line-clamp-2'
            }"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
