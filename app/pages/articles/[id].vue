<template>
  <div class="article-page" v-if="post">
    <h1 class="title">
      {{ post.title }}
    </h1>

    <div class="hero">
      <Skeleton v-if="!heroLoaded" height="500px" border-radius="16px" />
      <img
        :src="post.image"
        :alt="post.title"
        :class="{ loaded: heroLoaded }"
        @load="heroLoaded = true"
      />
    </div>

    <div class="content">
      <span class="about">About</span>

      <p class="description">
        {{ post.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Skeleton} from '~/shared/base-ui'
const { params } = useRoute()
const { $api } = useNuxtApp()

const heroLoaded = ref(false)

const { data: post } = await useAsyncData(`article-${params.id}`, () =>
  $api.blog().getBlogById(params.id as string),
)
</script>

<style scoped lang="scss">
.article-page {
  @include flex-column(toRem(32));
  padding: toRem(60) toRem(120);
  background: #f5f5f5;
  min-height: 100vh;
}

.title {
  font-size: toRem(56);
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: toRem(40);
  max-width: toRem(900);
}

.hero {
  @include flex-center();

  max-height: toRem(700);

  img {
    max-width: 100%;
    max-height: toRem(700);
    width: auto;
    height: auto;
    opacity: 0;

     &.loaded {
      opacity: 1;
    }
  }
}

.content {
  max-width: toRem(720);
}

.about {
  font-size: toRem(14);
  color: #777;
  display: block;
  margin-bottom: toRem(20);
}

.description {
  font-size: toRem(22);
  line-height: 1.6;
  color: #222;
}
</style>
