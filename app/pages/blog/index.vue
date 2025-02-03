<script setup lang="ts">
const route = useRoute()

const blog = await queryCollection('blog').first()

const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('posts').all()
})
</script>

<template>
  <UPage>
    <UPageHero v-bind="blog" />
    <UPageHeader
      v-bind="blog.featured"
      class="py-[50px]"
    />
    <UPageBody>
      <UContainer>
        <UBlogPost
          title="Self-Hosting: My Infrastructure, Workflows and Documentation"
          description="How I manage my self-hosted infrastructure, covering apps, VLANs, security, backups, monitoring, and automation."
          image="https://res.cloudinary.com/dpub6gcei/image/upload/v1738563447/keyboardDabbler/blog/DALL_E_2025-02-03_19.16.07_-_A_futuristic_self-hosting_dashboard_with_multiple_server_racks_network_connections_and_monitoring_graphs._The_image_features_a_sleek_digital_interfa_ifcu6c.webp"
          :badge="{
            label: 'homelab',
            color: 'neutral',
            variant: 'subtle'
          }"
          date="2024-11-25"
          to=""
          target="_blank"
          orientation="horizontal"
          variant="subtle"
        />
      </UContainer>
    </UPageBody>
    <UPageHeader
      v-bind="blog.posts"
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
            :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
            :badge="post.badge"
            variant="ghost"
            class="col-span-full"
            :ui="{
              description: 'line-clamp-2'
            }"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
