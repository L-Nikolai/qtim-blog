<template>
  <div class="articles">
    <h1 class="title">Articles</h1>
    <div class="posts">
      <Card v-for="item in paginatedPosts" :post="item" />
    </div>
    <Pagination v-model="currentPage" :total-pages="totalPages" />
  </div>
</template>

<script lang="ts" setup>
import { Card } from '~/modules/Blog'
import { Pagination } from '~/shared/base-ui'

const perPage: number = 8

const route = useRoute()
const router = useRouter()
const { $api } = useNuxtApp()

const currentPage = computed({
  get() {
    const page = Number(route.query.page)
    return page > 0 ? page : 1
  },
  set(value: number) {
    router.replace({
      query: {
        ...route.query,
        page: value !== 1 ? String(value) : undefined,
      },
    })
  },
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  $api.blog().getBlogs(),
)

const totalPages = computed(() =>
  Math.ceil((posts.value?.length || 0) / perPage),
)

const paginatedPosts = computed(() => {
  if (!posts.value) return []

  const start = (currentPage.value - 1) * perPage
  const end = start + perPage

  return posts.value.slice(start, end)
})

watchEffect(() => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = 1
  }
})
</script>

<style scoped lang="scss">
.articles {
  @include flex-column(toRem(32));
  padding: toRem(112);

  .title {
    margin: 0;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: toRem(32);
  }
}
</style>
