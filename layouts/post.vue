<script lang="ts" setup>
const { page: post } = useContent()
defineOgImageStatic({
  component: 'PostOgImage',
})
</script>

<template>
  <DocsPageLayout>
    <SchemaOrgArticle />
    <div class="flex items-center mb-3">
      <TopBreadcrumbs v-if="post.breadcrumbs !== false" class="mb-0" />
      <TagList :tags="post.tags" class="opacity-50 hover:opacity-100 transition text-sm" />
    </div>
    <PageTitle :post="post" />
    <PostMeta :post="post" />
    <article>
      <div class="prose-wrap max-w-85ch">
        <Prose>
          <ContentRenderer :value="post" />
        </Prose>
      </div>
    </article>
  </DocsPageLayout>
</template>

<style>
@media(max-width: 1024px) {
  .toc {
    position: initial !important;
  }
}

.toc {
  top: 160px !important;
}

.docs-prev-next .wrapper {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  align-items: start !important;
}

:root.dark .docs-prev-next a[data-v-3c2ee526]:hover {
  background-color: rgb(17, 24, 40);
  border-color: rgb(17, 24, 40);
}
</style>
